import mongoose from 'mongoose';
const EventSchema = new mongoose.Schema({

    EventName: String,
        image: String,
        descrip:String
     
});
const    Event= mongoose.model('Event', EventSchema);
Event.insertMany([
    {
    EventName:"Birthday",
    image:"https://specialyou.in/cdn/shop/files/81wwcAF6-eL._SL1500.jpg?v=1708413229&width=2048",
    descrip:"Ivory Curtain DIY Birthday Decor"
    },
    {
        EventName:"Birthday",
        image:"https://cheetah.cherishx.com/uploads/1710915755_large.jpg",
        descrip:"Pastel pink & rose gold decoration"
    },
    {
        EventName:"Birthday",
        image:"https://cheetah.cherishx.com/uploads/1682599515_large.jpg",
        descrip:"White And Golden Mesh Birthday Ring Decor"
    },
    {
     EventName:"Birthday",
    image:"https://www.togetherv.com/blog/wp-content/uploads/2024/07/67196d85-bf1b-4907-b562-5e9426ffc156.webp",
    descrip:"Premium Balloon Ring Decoration"
    },
    {
    EventName:"Birthday",
    image:"https://i0.wp.com/chintupartyandevents.in/wp-content/uploads/2024/04/Elegant-Birthday-Decorations-At-Home.jpg?fit=1000%2C1000&ssl=1",
    descrip:"Elegant Birthday Decoration"
    },
    {
        EventName:"Birthday",
        image:"https://5.imimg.com/data5/SELLER/Default/2023/8/339513209/LV/VJ/HK/186712248/302a-1205102953-500x500.jpg ",
        descrip:"Pink Cloth Birthday Decoration Net Curtain"
        },
        {
            EventName:"Birthday",
            image:"https://www.7eventzz.com/productsicon/c47a95f1f8b101084836b37495bde3c91716553085.jpg",
            descrip:"Birthday Terrace Decoration"
        },
        {
            EventName:"Birthday",
            image:"https://cheetah.cherishx.com/uploads/1685452351_large.jpg",
            descrip:"Golden Sequin Birthday Decorr"
        },
        {
         EventName:"Birthday",
        image:"https://celebrationcreators.in/wp-content/uploads/2023/09/20-1.png",
        descrip:"Shimmery Stylish Birthday decor"
        },
        {
        EventName:"Birthday",
        image:"https://images.jdmagicbox.com/quickquotes/images_main/party-propz-seasonal-decorations-11-08-2021-1217-240038014-lfzlx.jpg",
        descrip:"PARTY PROPZ Happy Birthday Decoration"
        },
        {
            EventName:"Birthday",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh24Pww8z7Z1wDIFNdpjGYY4XhUiOvnjDqHbba5S7U2woY87QIMy4b6dewW00QhuRYa7U&usqp=CAU",
            descrip:"Rainbow Theme Birthday Decoration"
            },
            {
                EventName:"Birthday",
                image:"https://specialyou.in/cdn/shop/files/71zb6vRgWrL._SX522.jpg?v=1688128152&width=2048",
                descrip:"Majestic Maroon DIY Birthday Decoration"
            },
            {
                EventName:"Birthday",
                image:"https://cheetah.cherishx.com/uploads/1627318182_original.jpg",
                descrip:"Drinks Theme Birthday Decoration"
            },
            {
             EventName:"Birthday",
            image:"https://cheetah.cherishx.com/uploads/1709538261_large.jpg",
            descrip:"Elsa's Wonderland Birthday Decoration"
            },
            {
            EventName:"Birthday",
            image:"https://cdn.togetherv.com/cute-jungle-safari-theme-birthday-decor-main_1713262218.webp",
            descrip:"Cute Jungle Safari Theme Birthday Decor"
            },
])

Event.insertMany([
    {
    EventName:"Wedding",
    image:"https://img.staticmb.com/mbcontent//images/uploads/2022/5/wedding%20stage%20decoration.jpg",
    descrip:"Elegant Wedding Decor"
    },
    {
        EventName:"Wedding",
        image:"https://i0.wp.com/blog.shaadishop.co/wp-content/uploads/2015/10/indian-wedding-punjabi-jain-kunal-shveta-bride-groom-hotel-irvine-global-photography-lehenga-sherwani-sera-mandap-pink-canopy-gold-pillars.jpg?fit=1296%2C864&ssl=1",
        descrip:"Wedding Decor"
    },
    {
        EventName:"Wedding",
        image:"https://t4.ftcdn.net/jpg/04/20/23/09/360_F_420230944_5zUmrpR5akRiCEZhhRtapMkpvd67Hw7C.jpg",
        descrip:"Indian wedding decor"
    },
    {
     EventName:"Wedding",
    image:"https://www.culturalindia.net/iliimages/Wedding-Decoration-ili-110-img-5.jpg",
    descrip:"Floral wedding decoration"
    },
    {
    EventName:"Wedding",
    image:"https://thecamellia.events/wp-content/uploads/2024/05/indian-wedding-mandap-decor-yellow-white-flowers-scaled.jpg",
    descrip:"luxurious wedding decoration"
    },
    {
        EventName:"Wedding",
        image:"https://i.imgur.com/tJqCdI9.jpeg",
        descrip:"Beautiful wedding decoration"
        },
        {
            EventName:"Wedding",
            image:"https://png.pngtree.com/thumb_back/fh260/background/20240705/pngtree-indian-wedding-mandap-decor-yellow-and-white-flowers-image_15937538.jpg",
            descrip:"yellow theme floral decoration"
        },
        {
            EventName:"Wedding",
            image:"https://www.shutterstock.com/image-photo/beautiful-decorations-cultural-program-wedding-600w-1503625721.jpg",
            descrip:"Lightning entry wedding decoration"
        },
        {
         EventName:"Wedding",
        image:"https://i.pinimg.com/736x/f6/32/c3/f632c33eb0790d45bdec9db5be614b91.jpg",
        descrip:"Traditional wedding decoration"
        },
        {
        EventName:"Wedding",
        image:"https://i.pinimg.com/236x/5d/53/0e/5d530ed616e16defe5c216a9363a69da.jpg",
        descrip:"wedding mandap"
        },
        {
            EventName:"Wedding",
            image:"https://i.imgur.com/hs2DKZt.jpeg",
            descrip:"Elegant decor"
            },
            {
                EventName:"Wedding",
                image:"https://i0.wp.com/decorsutrablog.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-11-at-10.09.02-PM.jpeg?fit=1080%2C1080&ssl=1",
                descrip:"Dream theme"
            },
            {
                EventName:"Wedding",
                image:"https://static.wixstatic.com/media/c03296_64b4028ae9ea465d975ca4c0dd5f98c0~mv2.jpg/v1/fill/w_564,h_356,al_c,q_80,enc_auto/c03296_64b4028ae9ea465d975ca4c0dd5f98c0~mv2.jpg",
                descrip:"Modern Indian wedding"
            },
            {
             EventName:"Wedding",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoB9xWyf30MEJfe6Dz9SRvKpBNQWmKv433WcCkKIhCtb9M4l8jZaB02g3lyhzVNfOTQqA&usqp=CAU",
            descrip:"Art decoration"
            },
            {
            EventName:"Wedding",
            image:"https://i0.wp.com/decorsutrablog.com/wp-content/uploads/2020/12/Decorsutra_Mehendi-Decor_14.jpg?resize=780%2C508&ssl=1",
            descrip:"Wedding decor"
            },
])
Event.insertMany([
    {
    EventName:"Babyshower",
    image:"https://cheetah.cherishx.com/uploads/1716804492_large.jpg",
    descrip:"Chic Bohemian Baby Shower Decor"
    },
    {
        EventName:"Babyshower",
        image:"https://cheetah.cherishx.com/uploads/1703855420_large.jpg",
        descrip:"Serenity brown baby shower decor"
    },
    {
        EventName:"Babyshower",
        image:"https://specialyou.in/cdn/shop/files/71ZcFVeAlkL._SL1500.jpg?v=1708075865&width=2048",
        descrip:"Fascinating baby shower decor"
    },
    {
     EventName:"Babyshower",
    image:"https://birthdaywala.in/wp-content/uploads/2024/08/Baby-Shower3.webp",
    descrip:"Oh Baby Baby Shower Decoration"
    },
    {
    EventName:"Babyshower",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRve_eUF9xriXbehN0EIn3OntRqh_RdNi8RODm5nbk-D_7HpVLNvkWickTR_XKHbvBOQ0Q&usqp=CAU",
    descrip:"pink & purple theme baby shower decor"
    },
    {
        EventName:"Babyshower",
        image:"https://d1x5473tif8knj.cloudfront.net/media/events/576/conversions/BS2114-watermark.jpg",
        descrip:"Baby Shower Premium Decoration with Pampas Grass and Palm Leaf"
        },
        {
            EventName:"Babyshower",
            image:"https://birthdaywala.in/wp-content/uploads/2024/08/Baby-Shower9.webp",
            descrip:"Elegant Baby Shower Decoration"
        },
        {
            EventName:"Babyshower",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphK_1YZS4SF7bzukAusQuNsoAWPIFeIOqLw&s",
            descrip:"classic baby shower decor"
        },
        {
         EventName:"Babyshower",
        image:"https://i0.wp.com/chintupartyandevents.in/wp-content/uploads/2024/10/Seemantham-Decoration-Background-1.jpg?fit=1000%2C1000&ssl=1",
        descrip:"Seemantham Decoration"
        },
        {
        EventName:"Babyshower",
        image:"https://chintupartyandevents.in/wp-content/uploads/2024/10/Seemantham-Decoration-At-Home.jpg",
        descrip:"Greeny baby shower decor"
        },
        {
            EventName:"Babyshower",
            image:"https://cheetah.cherishx.com/uploads/1700290884_large.jpg",
            descrip:"Baby Shower Natural Flower Decoration"
            },
            {
                EventName:"Babyshower",
                image:"https://housing.com/news/wp-content/uploads/2022/10/baby-shower-decorations_2-300x400.jpg",
                descrip:"Decoration ideas for baby shower at home"
            },
            {
                EventName:"Babyshower",
                image:"https://cheetah.cherishx.com/uploads/1690280340_large.jpg",
                descrip:"Classic baby shower flower decoration"
            },
            {
             EventName:"Babyshower",
            image:"https://www.7eventzz.com/productsicon/eebb86912cb3cc808a6439d7f48bd7641715416312.jpg",
            descrip:"Indian baby shower decor"
            },
            {
            EventName:"Babyshower",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Gax5H_PolquQPBYakpu2RijiQ5kFyuRWXTZvbn6TqNgnHYM-dv__ortjOTh0JKG2LP0&usqp=CAU",
            descrip:"Traditional baby shower"
            },
])
Event.insertMany([
    {
    EventName:"Festival",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeaPM8KKjGRlQ6qmdFyzjO-z1odthOxcZFIA&s",
    descrip:"Festival Decor Idea"
    },
    {
        EventName:"Festival",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy42NyGA9WTLNR5kkjVyPQMiSphJL2rWT-LgmQ7_muqTSAUT9cbenRMBbrtD8Cj7UrnEQ&usqp=CAU",
        descrip:"Handmade Wall Decor Lotus with jhumki Style Hanging for Home"
    },
    {
        EventName:"Festival",
        image:"https://cdn.togetherv.com/elegant-pink-ganpati-puja-decor-1_1661068032.webp",
        descrip:"Elegant Pink Ganpati Puja Decor"
    },
    {
     EventName:"Festival",
    image:"https://5.imimg.com/data5/SELLER/Default/2024/4/410607859/TT/DY/DP/183049431/maha-shiv-ratri-decoration-500x500.jpg",
    descrip:"Maha ShivaRatri Decoration"
    },
    {
    EventName:"Festival",
    image:"https://static.toiimg.com/photo/msid-104286673/104286673.jpg",
    descrip:"Christmas Festival"
    },
    {
        EventName:"Festival",
        image:"https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/Christmas--fed204.jpg",
        descrip:"Mery Christmas decor"
        },
        {
            EventName:"Festival",
            image:"https://www.neavegroup.com/wp-content/uploads/2022/09/unnamed.png",
            descrip:"The square Backdrop birthday Decor"
        },
        {
            EventName:"Festival",
            image:"https://www.neavegroup.com/wp-content/uploads/2022/09/unnamed.png",
            descrip:"Residential Christmas Decor"
        },
        {
         EventName:"Festival",
        image:"https://5.imimg.com/data5/BY/OH/ZB/SELLER-2513424/festival-decoration-in-malls-corporates-500x500.jpg",
        descrip:"Festival Decoration In Malls"
        },
        {
        EventName:"Festival",
        image:"https://5.imimg.com/data5/SELLER/Default/2023/4/301952347/NZ/AU/GA/47722788/mall-event-decor.jpg",
        descrip:"Mall Event Decor"
        },
        {
            EventName:"Festival",
            image:"https://assets-news.housing.com/news/wp-content/uploads/2022/09/29084751/DIY-ideas-for-Durga-puja-decoration-at-home-07.jpg",
            descrip:"Simple durga puja pandal and home décor ideas"
            },
            {
                EventName:"Festival",
                image:"https://img.staticmb.com/mbcontent/images/crop/uploads/2023/2/Colourful-theme-holi-decoration-ideas_0_1200.jpg",
                descrip:"Holi decoration ideas"
            },
            {
                EventName:"Festival",
                image:"https://media.designcafe.com/wp-content/uploads/2021/05/04164103/eid-decorations-with-wreath-and-banners-for-wall.jpg",
                descrip:"Eid decoration"
            },
            {
             EventName:"Festival",
            image:"https://i.pinimg.com/736x/f6/91/68/f69168fbec2739582bd1a02cd6698d9f.jpg",
            descrip:"Floral pooja decoration"
            },
            {
            EventName:"Festival",
            image:"https://m.media-amazon.com/images/I/81TEGaV8yqL",
            descrip:"Simple backdrop at home"
            },
])
Event.insertMany([
    {
    EventName:"Anniversary",
    image:"https://www.jiomart.com/images/product/original/rvrgibfcav/groovy-dudz-rose-gold-happy-anniversary-decoration-items-combo-wedding-anniversary-decoration-31pcs-product-images-orvrgibfcav-p603877994-0-202308141817.jpg?im=Resize=(1000,1000)",
    descrip:"Rose-gold anniversary decor with balloons and banner"
    },
    {
        EventName:"Anniversary",
        image:"https://rukminim2.flixcart.com/image/850/1000/kmqn3bk0/balloon/u/l/2/84-happy-anniversary-decoration-items-with-banner-balloons-led-original-imagfkjpz6j4zqxb.jpeg?q=90&crop=false",
        descrip:"Elegant anniversary decor with balloons and lights"
    },
    {
        EventName:"Anniversary",
        image:"https://cheetah.cherishx.com/uploads/1648622880_large.jpg",
        descrip:"Romantic red and gold anniversary decor with balloons and lights."
    },
    {
     EventName:"Anniversary",
    image:"https://floriwish.in/wp-content/uploads/2024/06/anniversary-decoration.webp",
    descrip:"Elegant white and gold anniversary decor with balloons and flowers."
    },
    {
    EventName:"Anniversary",
    image:"https://frillx.com/cdn/shop/products/rosegold-happy-anniversary-balloon-decoration-kit-pack-of-25-pcs-anniversary-banner-curisve-love-foil-star-heart-shape-foil-confetti-chrome-balloons-anniversary-145476_533x.jpg?v=1646291320",
    descrip:"Rose-gold anniversary decor with heart balloons and banner."
    },
    {
        EventName:"Anniversary",
        image:"https://www.jiomart.com/images/product/original/rvssypbzye/special-you-anniversary-decoration-items-with-white-and-metallic-gold-set-balloons-kit-green-leaves-and-happy-anniversery-banner-for-husband-wife-mother-father-boyfriend-girlfriend-silver-golden-jubilee-celebration-pack-of-65-items-product-images-orvssypbzye-p602642162-0-202306250242.jpg?im=Resize=(1000,1000)",
        descrip:"White and gold anniversary decor with green leaves and banner."
        },
        {
            EventName:"Anniversary",
            image:"https://img.staticmb.com/mbcontent/images/crop/uploads/2023/1/A-Chic-Anniversary-Decoration-Idea-at-Home_0_1200.jpg",
            descrip:"Elegant home anniversary decor with candles, lights, and floral accents."
        },
        {
            EventName:"Anniversary",
            image:"https://5.imimg.com/data5/SELLER/Default/2023/2/SM/VO/RU/142579589/glossy-balloon-anniversary-decoration.jpg",
            descrip:"Glossy balloon anniversary decor with vibrant colors and elegant setup."
        },
        {
         EventName:"Anniversary",
        image:"https://borntoparty.in/img/anivarsary/50Anniversary-Decoration.jpg",
        descrip:"Golden 50th anniversary decor with balloons and elegant accents."
        },
        {
        EventName:"Anniversary",
        image:"https://www.7eventzz.com/productsicon/0d672d43fbee8b377711471f65c5579a1715598162.jpg",
        descrip:"Colorful anniversary decor with balloons, ribbons, and a festive banner."
        },
        {
            EventName:"Anniversary",
            image:"https://www.giftlaya.com/admin/api/public/images/1669796644.jpg",
            descrip:"Vibrant anniversary decor with multi-colored balloons and a festive banner"
            },
            {
                EventName:"Anniversary",
                image:"https://i.pinimg.com/564x/68/b7/6f/68b76fd8c85169abd1a422f21e39b2fb.jpg",
                descrip:"Elegant white and gold anniversary decor with balloons and a floral touch."
            },
            {
                EventName:"Anniversary",
                image:"https://jugyah-dev-property-photos.s3.ap-south-1.amazonaws.com/anniversary_decoration_12_86f9a808f4.webp",
                descrip:"Sophisticated anniversary decor with golden balloons and a Happy Anniversary banner"
            },
            {
             EventName:"Anniversary",
            image:"https://cheetah.cherishx.com/uploads/1692784002_large.jpg",
            descrip:"Anniversary decor with pink and gold balloons, and LED lights"
            },
            {
            EventName:"Anniversary",
            image:"https://jusst4you.com/wp-content/uploads/2024/05/Anniversary-Room-Decoration-at-Home-8.png",
            descrip:"Cozy anniversary room decor with balloons, lights, and a romantic atmosphere"
            },
])
Event.insertMany([
    {
    EventName:"HouseWarming",
    image:"https://assets-news.housing.com/news/wp-content/uploads/2022/06/01163538/House-warming-ceremony-decor-ideas-1.jpg",
    descrip:"Festive housewarming decor with vibrant flowers, traditional motifs, and colorful accents"
    },
    {
        EventName:"HouseWarming",
        image:"https://www.specialoccasions.in/assets/userassets/USER491690/productImages/p_USER491690754926835267889171574235481249.jpg",
        descrip:"Elegant house anniversary decor with gold and white balloons, a celebratory banner, and a chic setup"
    },
    {
        EventName:"HouseWarming",
        image:"https://img.staticmb.com/mbcontent/images/crop/uploads/2022/12/griha_pravesh_home_decor_entrance_0_1200.jpg",
        descrip:"Traditional Griha Pravesh decor with floral arrangements, torans, and vibrant accents at the entrance"
    },
    {
     EventName:"HouseWarming",
    image:"https://i.pinimg.com/550x/ee/bb/16/eebb165a6b2afcf93073e291f6f314b4.jpg",
    descrip:"Traditional housewarming decor with flowers, torans, and candles creating a warm ambiance"
    },
    {
    EventName:"HouseWarming",
    image:"https://www.nobroker.in/blog/wp-content/uploads/2022/07/Flower-Vases-Bouquet.jpg",
    descrip:"Elegant floral decor with vibrant flower vases and a colorful bouquet"
    },
    {
        EventName:"HouseWarming",
        image:"https://i.pinimg.com/736x/57/34/2b/57342b1dc36d27248c8a3d1961c54849.jpg",
        descrip:"Minimalist house decor with potted plants, candles, and soft lighting for a serene atmosphere"
        },
        {
            EventName:"HouseWarming",
            image:"https://i.pinimg.com/736x/ac/b1/6d/acb16d9b4f1ccef1356b3f6df72828a9.jpg",
            descrip:"Chic home decor with hanging plants, cozy lighting, and a modern aesthetic"
        },
        {
            EventName:"HouseWarming",
            image:"https://cdn.shopify.com/s/files/1/0674/5289/5554/files/House_warming_ganpati_pooja_decor_480x480.jpg?v=1679553847",
            descrip:"Traditional housewarming decor with Ganpati idols, floral arrangements, and ceremonial items for pooja"
        },
        {
         EventName:"HouseWarming",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtQe1wMbOtY_mSrobUyfGHNR2ZtHLh4Oyljmz63h7edFPBC7_oE-Smrz6mShDK45BW2M&usqp=CAU",
        descrip:"Simple and elegant house decor with flower petals, candles, and a welcoming ambiance."
        },
        {
        EventName:"HouseWarming",
        image:"https://isteam.wsimg.com/ip/9b32cde9-8a4b-4ae1-a25b-c072a5585a43/Varalakshmi%20vratham%20decor%20Jublihills%202.jpeg",
        descrip:"Traditional Varalakshmi Vratham decor with flowers, torans, and sacred items for the ceremony."
        },
        {
            EventName:"HouseWarming",
            image:"https://media.licdn.com/dms/image/v2/C5612AQF6oD2gzT38pQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1645090537117?e=1736380800&v=beta&t=wk6CF-8Mt9Jg5cE4U3RKyMIIFkIr2_YOUnJNtMZbMnQ",
            descrip:"Elegant traditional decor for a ceremony with flowers, candles, and vibrant elements."
            },
            {
                EventName:"HouseWarming",
                image:"https://pinkappicons.com/wp-content/uploads/2024/03/Housewarming-Party-Using-Handmade-Decorations-1024x576.jpg",
                descrip:"Creative housewarming party decor with handmade elements, candles, and vibrant accents"
            },
            {
                EventName:"HouseWarming",
                image:"https://images.news9live.com/wp-content/uploads/2024/10/Diwali-decor-tips.jpg?w=1200&enlarge=true",
                descrip:"Festive Diwali decor with colorful rangoli, diyas, and traditional accents for a vibrant celebration"
            },
            {
             EventName:"HouseWarming",
            image:"https://pinkappicons.com/wp-content/uploads/2024/03/Decorate-Your-Housewarming-With-Something-Extra-Special-1024x576.jpg",
            descrip:"Unique housewarming decor with personalized touches, candles, and elegant accents for a warm atmosphere."
            },
            {
            EventName:"HouseWarming",
            image:"https://cheetah.cherishx.com/uploads/1691147393_large.jpg",
            descrip:"Elegant housewarming decor with balloons, floral arrangements, and a welcoming atmosphere."
            },
])

export default Event;
