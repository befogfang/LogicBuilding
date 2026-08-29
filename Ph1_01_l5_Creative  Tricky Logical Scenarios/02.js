//Take three numbers and check if they can form a Pythagorean triplet.  

function pgTriplet(a,b,c){
    //need to sort to put farmula or have think more for either ways
    //pyt - sum of square of two side give square of thired side

    function s(l){
        return l*l;
    }

    ((s(a)+s(b)==s(c))||(s(b)+s(c)==s(a))||(s(a)+s(c)==s(b)))?console.log("yes"):console.log("no");

}
pgTriplet(6,5,2)
pgTriplet(3,5,4)