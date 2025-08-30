interface Product {
  ID: number;
  product_name: string;
  product_price: number;
  image_url: string;
  descripition?: string;
  isHighlighted?: boolean
}  

export const mock: Product[] = [
    {
        ID: 1,
        product_name: "Bola da Nike CBF Academy 5",
        product_price: 80,
        image_url: "https://images.tcdn.com.br/img/img_prod/589314/bola_da_nike_cbf_academy_5_6_7741_1_e7a2b9de4ce3095ca948f6d719673ce7_20240515182119.png",
        isHighlighted: true,

    },
    
    {
        ID: 2,
        product_name: "Chuteira Society Mizuno Morelia",
        product_price: 120,
        image_url: "https://www.mundodofutebol.com.br/lojas/00057707/prod/MIZUNOPARATAS.png",
        isHighlighted: true,
    },
    {
        ID: 3,
        product_name: "TENIS DAY OLYMPIKUS PRETO NT 43927547-PTO",
        product_price: 130,
        image_url: "https://cdn.awsli.com.br/600x700/1621/1621592/produto/218711879/TENIS%20DAY%20OLYMPIKUS%20PRETO%20(1).png",
        isHighlighted: true,
    },
    {
        ID: 4,
        product_name: "camisa do flamengo 2019",
        product_price: 100,
        image_url: "https://acdn-us.mitiendanube.com/stores/003/147/909/products/tmp_b64_173183e7-43d9-418f-a674-a6daeb5f9617_3147909_5604943-cac2a18218a6c3bef717375827586678-1024-1024.webp",
        isHighlighted: true,
    },
    {
        ID: 5,
        product_name: "camisa do lakers",
        product_price: 70,
        image_url: "https://img4.dhresource.com/webp/m/0x0/f3/albu/ys/l/18/a5c50377-4dd1-48f0-922c-19b42eeb1659.png",
        isHighlighted: true,
    },
    {
        ID: 6,
        product_name: "camisa do barcelona 2009",
        product_price: 95,
        image_url: "https://acdn-us.mitiendanube.com/stores/003/147/909/products/tmp_b64_0f9e83f3-9753-4bdc-8ee0-4f1b3592c7f5_3147909_5604943-1e944fe5e903dd40eb17375834994935-1024-1024.webp",
        isHighlighted: true,
    },
    {
        ID: 7,
        product_name: "chuteira da nike do Neymar 2015",
        product_price: 200,
        image_url: "https://venifutebol.com.br/cdn/shop/files/ChuteiraCampoNikeZoomMercurialVapor15EliteFGLaranjaePreta2_b2404b3b-08bf-4207-8258-df0a68e8d483.png?v=1705689833",
        isHighlighted: true,
    },
    {
        ID: 8,
        product_name: "CRIA DE BASE - CHUTEIRA NIKE SUPERFLY FG MERCURIAL CAMPO",
        product_price: 350,
        image_url: "https://criadebase.bwimg.com.br/criadebase/produtos/chuteira-nike-superfly-fg-mercurial-campo-1730559227.3377.png",
        isHighlighted: false,
    },
   
    {
        ID: 9,
        product_name: "Camisa Milan Retro 2011/12 Vermelha e Preta Adidas",
        product_price: 110,
        image_url: "https://acdn-us.mitiendanube.com/stores/002/183/167/products/camisa-retro-milan-2011-2012-home-1-vermelha-preta-adidas1-56d8a78a1bc5f2848d16875314728153-640-0.png",
        isHighlighted: false,
    },
   
    {
        ID: 10,
        product_name: "Camisa Real Madrid 2025/26 Branca Adidas - Conforto e Tradição",
        product_price: 100,
        image_url: "https://acdn-us.mitiendanube.com/stores/002/183/167/products/camisa-real-madrid-1-home-i-branca-torcedor-kit-jersey-t-shirt-white-fan-2025-2026-adidas-66b22200c1874f0cf817492213575894-640-0.png",
        isHighlighted: false,
    },
    {
        ID: 11,
        product_name: "Meias Antiderrapantes Imantado PRO",
        product_price: 40,
        image_url: "https://acdn-us.mitiendanube.com/stores/002/183/167/products/meia-antiderrapante-imantado-pro-socks-preta-e8bf028f56f5ef52ea16988484570896-640-0.png",
        isHighlighted: false,
    },
    {
        ID: 12,
        product_name: "bola da copa do mundo de 2010 jabulani",
        product_price: 80,
        image_url: "https://static.wixstatic.com/media/c4f34d_3191701e4a4341aca38b8cb58a45668d.png/v1/fill/w_280,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c4f34d_3191701e4a4341aca38b8cb58a45668d.png",
        isHighlighted: false,
    },
    {
        ID: 13,
        product_name: "Chuteira Umbro U01FB002015 Futebol Society Class Preto",
        product_price: 80,
        image_url: "https://17889.cdn.simplo7.net/static/17889/sku/homens-chuteira-umbro-u01fb002015-futebol-society-class-preto-1687552182287.png",
        isHighlighted: false,
    },
    {
        ID: 14,
        product_name: "CRIA DE BASE - CHUTEIRA CAMPO ADIDAS X CRAZYFAST TRAVA MISTA",
        product_price: 350,
        image_url: "https://criadebase.bwimg.com.br/criadebase/produtos/chuteira-campo-adidas-x-crazyfast-trava-mista-1719239921.7689.png",
        isHighlighted: false,
    },
    {
        ID: 15,
        product_name: "Camisa Palmeiras Puma I 23/24 - Jogador - Branco",
        product_price: 50,
        image_url: "https://lojapalmeiras.vtexassets.com/arquivos/ids/187108-500-auto?v=638657302214700000&width=500&height=auto&aspect=true",
        isHighlighted: false,
    },
    {
        ID: 16,
        product_name: "Chuteira Puma Future 8 PlaY It De Society (Neymar) (108378-01)",
        product_price: 50,
        image_url: "https://cdnv2.moovin.com.br/genko/imagens/produtos/det/chuteira-puma-future-8-play-it-de-society-neymar-108378-01-279086a1e6dcdb86da21663b0f116f85.png",
        isHighlighted: false,
    },
    {
        ID: 17,
        product_name: "Camisa Bayern de Munique Vermelha Home I 2024/25 Jogador",
        product_price: 50,
        image_url: "https://maltaesportes.com.br/wp-content/uploads/2024/05/download-26-3.webp",
        isHighlighted: false,
    },
    {
        ID: 18,
        product_name: "Camisa PSG Home 24/25 Masculina Nike Azul e Vermelho",
        product_price: 50,
        image_url: "https://acdn-us.mitiendanube.com/stores/003/147/909/products/1-93bde7e837c79c9ec317459476009220-1024-1024.png",
        isHighlighted: false,
    },
    {
        ID: 19,
        product_name: "CAMISA INTER MIAMI HOME 2025 TORCEDOR + #10 MESSI",
        product_price: 50,
        image_url: "https://dcdn-us.mitiendanube.com/stores/003/315/722/products/inter-miami-home-2025-messi-1-b8c0c20fa06031922717423275236816-1024-1024.png",
        isHighlighted: false,
    },
    {
        ID: 20,
        product_name: "Cristiano Ronaldo lança chuteira em homenagem ao tempo em que jogou no Manchester United",
        product_price: 50,
        image_url: "https://conteudo.imguol.com.br/blogs/169/files/2017/04/852511_001_E_PREM_native_600.png",
        isHighlighted: false,
    },
   

]