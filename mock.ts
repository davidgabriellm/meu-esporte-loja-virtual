interface Product {
  ID: number;
  product_name: string;
  product_price: number;
  image_url: string;
  descripition?: string;
}  

export const mock: Product[] = [
    {
        ID: 1,
        product_name: "Bola da Nike CBF Academy 5",
        product_price: 80,
        image_url: "https://images.tcdn.com.br/img/img_prod/589314/bola_da_nike_cbf_academy_5_6_7741_1_e7a2b9de4ce3095ca948f6d719673ce7_20240515182119.png"
    },
    
    {
        ID: 2,
        product_name: "Chuteira Society Mizuno Morelia",
        product_price: 120,
        image_url: "https://www.mundodofutebol.com.br/lojas/00057707/prod/MIZUNOPARATAS.png"
    },
    {
        ID: 3,
        product_name: "TENIS DAY OLYMPIKUS PRETO NT 43927547-PTO",
        product_price: 130,
        image_url: "https://cdn.awsli.com.br/600x700/1621/1621592/produto/218711879/TENIS%20DAY%20OLYMPIKUS%20PRETO%20(1).png"
    },
    {
        ID: 4,
        product_name: "camisa do flamengo 2019",
        product_price: 100,
        image_url: "https://acdn-us.mitiendanube.com/stores/003/147/909/products/tmp_b64_173183e7-43d9-418f-a674-a6daeb5f9617_3147909_5604943-cac2a18218a6c3bef717375827586678-1024-1024.webp"
    },
    {
        ID: 5,
        product_name: "camisa do lakers",
        product_price: 70,
        image_url: "https://img4.dhresource.com/webp/m/0x0/f3/albu/ys/l/18/a5c50377-4dd1-48f0-922c-19b42eeb1659.png"
    },
    {
        ID: 6,
        product_name: "camisa do barcelona 2009",
        product_price: 95,
        image_url: "https://acdn-us.mitiendanube.com/stores/003/147/909/products/tmp_b64_0f9e83f3-9753-4bdc-8ee0-4f1b3592c7f5_3147909_5604943-1e944fe5e903dd40eb17375834994935-1024-1024.webp"
    },
    {
        ID: 7,
        product_name: "chuteira da nike do Neymar 2015",
        product_price: 200,
        image_url: "https://venifutebol.com.br/cdn/shop/files/ChuteiraCampoNikeZoomMercurialVapor15EliteFGLaranjaePreta2_b2404b3b-08bf-4207-8258-df0a68e8d483.png?v=1705689833"
    },

]