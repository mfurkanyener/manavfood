const ProductCard = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <img src="/images/product1.jpg" alt="Ürün" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">Ürün Adı</h3>
            <p className="text-gray-500 mt-2">Kısa açıklama.</p>
            <a href="/products/1" className="text-blue-500 mt-4 block">Detayları Gör</a>
        </div>
    );
};

export default ProductCard;