/**
 * Created by chen4_000 on 4/7/2015.
 */


module.exports = {
    init : function(){
        localStorage.clear();
        localStorage.setItem('Products',JSON.stringify([
            {
                id : 'p_1',
                threadId : 't_1',
                productName : "Product1",
                productPrice :"50",
                productPicUrl :"someUrl",
                productDescription :"some"
            },
            {
                id : 'p_2',
                threadId : 't_2',
                productName : "Product2",
                productPrice :"50",
                productPicUrl :"someUrl",
                productDescription :"some"
            }
        ]))
    }
};