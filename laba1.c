
#include <stdio.h>
#include <stdio.h>
#include <math.h>
int main(void)
{
float a,x,g,f,y;
printf("Vvedite x: ");
scanf ("%f", &x);
printf("Vvedite a ");
scanf ("%f", &a);
g=3*(-3*a*a+2*a*x+21*x*x)/(35*a*a+37*a*x+6*x*x);
printf("g=%f\n\n", g);

printf("Vvedite x ");
scanf ("%f", &x);
printf("Vvedite a ");
scanf ("%f", &a);
f=1/cos(3*a*a+5*a*x+2*x*x);
printf("f=%f\n\n", f);

printf("Vvedite x ");
scanf ("%f", &x);
printf("Vvedite a ");
scanf ("%f", &a);
y=acos(-12*a*a-4*a*x+x*x+1);
printf("y=%f\n\n", y);
}

