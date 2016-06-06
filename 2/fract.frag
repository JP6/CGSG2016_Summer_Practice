precision mediump float;

uniform sampler2D uSampler;

uniform int maxIter;
uniform float maxNumber;

uniform float MouseX;
uniform float MouseY;

uniform float MouseS;

varying vec2 coord;
varying vec2 vTextureCoord;

int MandelColor( void )
{
    vec2 c = coord * MouseS - vec2(MouseX, MouseY);
    vec2 z = c;

    for (int i = 0; i < 40000; i++)
    {
        if (i > maxIter)
            break;
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
        if (z.x * z.x + z.y * z.y > maxNumber)
            return i;
    }

    return 0;
}

void main( void )
{
   //gl_FragColor = texture2D(uSampler, vec2(float(MandelColor()) / maxNumber * 256.0, 0));
   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
}
