    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    uniform float L;
    uniform float T;
    uniform float R;
    uniform float B;

    varying vec2 vTextureCoord;
    varying vec2 coord;


    void main(void) {
        coord = vec2(L + (aVertexPosition.x + 1.0) * 0.5 * (R - L),
                     B + (1.0 - aVertexPosition.y) * 0.5 * (T - B));
        vTextureCoord = aTextureCoord;
    }