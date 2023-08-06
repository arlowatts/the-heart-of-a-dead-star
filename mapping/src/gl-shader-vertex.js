export const vsSource = `#version 300 es
uniform mat4 uProjectionMatrix;
uniform mat4 uViewMatrix;

in vec4 aVertexPosition;

out vec4 aPointPosition;

void main() {
    gl_Position = uProjectionMatrix * uViewMatrix * aVertexPosition;
    aPointPosition = aVertexPosition;
}
`;
