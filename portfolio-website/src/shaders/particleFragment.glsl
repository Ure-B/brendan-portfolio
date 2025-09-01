uniform float u_time;

varying float vEffect;
varying float vRim;

void main() {
    vec3 baseColor = vec3(0.569, 0.369, 1.0);
    vec3 rimColor  = vec3(1.0, 1.0, 1.0);

    // Start with pure purple core
    vec3 finalColor = baseColor;

    // Mouse influence
    finalColor = mix(finalColor, rimColor, vEffect);

    // Rim always controls the white silhouette
    float pulse = 0.3 + 0.2 * sin(u_time * 2.0);
    //finalColor = mix(finalColor, rimColor, vRim);

    gl_FragColor = vec4(finalColor, 1.0);
}