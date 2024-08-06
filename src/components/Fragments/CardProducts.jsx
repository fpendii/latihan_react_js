import Button from "../Elements/Button";

const CardProduct = (props) => {
    const {children} = props;
    return (
        <div className="w-full max-w-sm border shadow m-2 bg-gray-800 border-gray-700 rounded-lg shadow flex flex-col justify-between flex-warp">
            {children}
        </div>
    )   
}

const Header = (props) => {
    const {image} = props;
    return (
        <a href="">
            <img src={`/images/${image}`} alt="products" className="p-8 rounded-t-lg w-full h-60 object-cover" />
        </a>
    )
}

const Body = (props) => {
    const {title,children} = props;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
                <p className="text-m text-white">
                   {children}
                </p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    const {type,children = "Rp...."} = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            {type == 'sold-out' &&
             <span className="text-sm font-medium text-gray-400">SOLD OUT</span>
             }
            {type == 'on-sale' && <span className="text-xl font-bold text-white">{children}</span>}
            <Button classname="bg-blue-600" >Add To Card</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;