attribute vec3 aVertexPosition;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

varying vec2 cord;

void main( void )
{
  gl_Position = vec4(aVertexPosition, 1.0);
  cord = vec2(aVertexPosition.x, aVertexPosition.y);
  cord *= vec2(1.59, 1.59);
  cord -= vec2(0.59, 0);
}