// Display a output of a code in a webpage
//  ***
//  **
//  *



function pattern()
{
    for(let i = 3; i >= 1; i--)
    {
        let row = "";
        for(let j = 1; j <= i; j++)
        {
           row += "* ";
        }
        console.log(row);
    }
}
pattern();

