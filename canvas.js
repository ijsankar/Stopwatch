var cv=document.getElementById("canvas");
var cvrect= cv.getContext('2d');
roundedFilledRect(cvrect,25,0,160,50,10,"lightblue");
roundedFilledRect(cvrect,30,5,30,40,5,"blue");
roundedFilledRect(cvrect,70,5,30,40,5,"blue");
roundedFilledRect(cvrect,110,5,30,40,5,"blue");
roundedFilledRect(cvrect,150,5,30,40,5,"blue");

roundedFilledRect(cvrect,205,0,80,50,10,"lightblue");
roundedFilledRect(cvrect,210,5,30,40,5,"blue");
roundedFilledRect(cvrect,250,5,30,40,5,"blue");

roundedFilledRect(cvrect,305,0,80,50,10,"lightblue");
roundedFilledRect(cvrect,310,5,30,40,5,"blue");
roundedFilledRect(cvrect,350,5,30,40,5,"blue");

roundedFilledRect(cvrect,405,0,80,50,10,"lightblue");
roundedFilledRect(cvrect,410,5,30,40,5,"blue");
roundedFilledRect(cvrect,450,5,30,40,5,"blue");
function roundedFilledRect(ctx, x, y, width, height, radius,fill) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.fillStyle=fill;
  ctx.fill();
}

s1=Math.floor(seconds/10);
s0=seconds%10;
m1=Math.floor(minutes/10);
m0=minutes%10;
h1=Math.floor(hours/10);
h0=hours%10;
d0=days%10;
d1=Math.floor(days/10);
d2=Math.floor(d1/10);
d1=d1%10;
d3=Math.floor(d2/10);
d2=d2%10;
var cvtxt= cv.getContext('2d');
cvtxt.font='28px Arial';
cvtxt.fillStyle='lightblue';
cvtxt.fillText(d3,37,35);
cvtxt.fillText(d2,77,35);
cvtxt.fillText(d1,117,35);
cvtxt.fillText(d0,157,35);

cvtxt.fillText(h1,217,35);
cvtxt.fillText(h0,257,35);

cvtxt.fillText(m1,317,35);
cvtxt.fillText(m0,357,35);

cvtxt.fillText(s1,417,35);
cvtxt.fillText(s0,457,35);
update();
function update(){
  s0+=1;
  if(s0==10){
    s1+=1;
    s0=0;
    if(s1==6){
      s1=0;
      m0+=1;
      if(m0==10){
        m0=0;
        m1+=1;
        if(m1==6){
          m1=0;
          h0+=1;
          if(h0==10){
            h0=0;
            h1+=1;
            roundedFilledRect(cvrect,250,5,30,40,5,"blue");
            cvtxt.font='28px Arial';
            cvtxt.fillStyle='lightblue';
            cvtxt.fillText(h0,257,35);
          }
          if(h0==4&&h1==2){
            h0=0;
            h1=0;
            d0+=1;
            if(d0==10){
              d0=0;
              d1+=1;
              if(d1==10){
                d1=0;
                d2+=1;
                if(d2==10){
                  d2=0;
                  d3+=1;
                  roundedFilledRect(cvrect,70,5,30,40,5,"blue");
                  cvtxt.font='28px Arial';
                  cvtxt.fillStyle='lightblue';
                  cvtxt.fillText(d2,77,35);
                  roundedFilledRect(cvrect,30,5,30,40,5,"blue");
                  cvtxt.font='28px Arial';
                  cvtxt.fillStyle='lightblue';
                  cvtxt.fillText(d3,37,35);
                }
                roundedFilledRect(cvrect,110,5,30,40,5,"blue");
                cvtxt.font='28px Arial';
                cvtxt.fillStyle='lightblue';
                cvtxt.fillText(d1,117,35);
              }
              roundedFilledRect(cvrect,150,5,30,40,5,"blue");
              cvtxt.font='28px Arial';
              cvtxt.fillStyle='lightblue';
              cvtxt.fillText(d0,157,35);
            }
            roundedFilledRect(cvrect,210,5,30,40,5,"blue");
            cvtxt.font='28px Arial';
            cvtxt.fillStyle='lightblue';
            cvtxt.fillText(h1,217,35);
          }
          roundedFilledRect(cvrect,250,5,30,40,5,"blue");
          cvtxt.font='28px Arial';
          cvtxt.fillStyle='lightblue';
          cvtxt.fillText(h0,257,35);
        }
        roundedFilledRect(cvrect,310,5,30,40,5,"blue");
        cvtxt.font='28px Arial';
        cvtxt.fillStyle='lightblue';
        cvtxt.fillText(m1,317,35);
      }
      roundedFilledRect(cvrect,350,5,30,40,5,"blue");
      cvtxt.font='28px Arial';
      cvtxt.fillStyle='lightblue';
      cvtxt.fillText(m0,357,35);
    }
    roundedFilledRect(cvrect,410,5,30,40,5,"blue");
    cvtxt.font='28px Arial';
    cvtxt.fillStyle='lightblue';
    cvtxt.fillText(s1,417,35);
  }
  roundedFilledRect(cvrect,450,5,30,40,5,"blue");
  cvtxt.font='28px Arial';
  cvtxt.fillStyle='lightblue';
  cvtxt.fillText(s0,457,35);
  setTimeout('update()',1000);
}

