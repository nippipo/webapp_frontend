import Home from '../views/Home.vue'
import Product from '../components/Product.vue'
import Cart from '../components/Cart.vue'

describe("Testing Home view", () => {
    it("should render product component", () => {
       
        const wrapper = mount(Product, {
            propsData:{
                pdid: Number,
                pdname:String,
                pdprice:Number,
                pdstock:Number,
                pdimage:String,
                pddescription:String
            }
        })
    })

    it("should render Cart component", () => {
        const wrapper = mount(Home)
         const cart = wrapper.findComponent(Cart)
         expect(cart.exists().tobeTruthy)
    })
}
)