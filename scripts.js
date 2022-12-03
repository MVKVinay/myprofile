/* Place your JavaScript in this file */
const arr=['red','yellow','blue','grey','orange','pink'];
function changeBackground()
{
    const index=Math.floor(Math.random()*6);
    document.body.style.background=arr[index];
    
}
