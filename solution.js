var maxArea = function(height) {
    var area=[]
    var shortHeight;
    for(var i=0;i<height.length;i++)
        {
            for(var j=i+1;j<height.length;j++)
                {if(height[i]<=height[j])
                    {
                        shortHeight=height[i]
}
                 else
                     {
                         shortHeight=height[j]
}
                 area.push((j-i)*shortHeight)
}
}

  return area.sort((a,b)=>{return a-b})[area.length-1]  
};