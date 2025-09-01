uniform float u_time;
uniform vec3 u_mouse;
uniform float u_radius;
attribute vec3 originalPosition;

varying float vEffect;
varying float vRim;

void main() {
    float dist = distance(originalPosition, u_mouse);

    float pulseRadius = u_radius * (0.7 + 0.3 * sin(u_time * 3.0));
    float effect = 1.0 - smoothstep(0.0, pulseRadius, dist);
    vEffect = effect;

    vec3 globalNoise = vec3(
        snoise(originalPosition * 0.5 + vec3(u_time*0.2, 0.0, 0.0)),
        snoise(originalPosition * 0.5 + vec3(0.0, u_time*0.2, 0.0)),
        snoise(originalPosition * 0.5 + vec3(0.0, 0.0, u_time*0.2))
    ) * 0.1;

    vec3 pointerNoise = vec3(
        snoise(originalPosition + vec3(u_time, 0.0, 0.0)),
        snoise(originalPosition + vec3(0.0, u_time, 0.0)),
        snoise(originalPosition + vec3(0.0, 0.0, u_time))
    ) * effect * 0.5;

    vec3 animatedPosition = originalPosition + globalNoise + pointerNoise;

    vec4 mvPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 4.0;

    vec3 normal = normalize((modelViewMatrix * vec4(originalPosition, 0.0)).xyz);
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    float rim = 1.0 - abs(dot(normal, viewDir));
    vRim = pow(rim, 2.0);
}