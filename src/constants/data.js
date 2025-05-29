import images from "./images";

// src/data/festivalsData.js

// src/data/festivalsData.js

const festivals = [
  {
    image: "/Tour/t8.png",
    titleVN: "Lễ Hội Bia Munich, Đức",
    titleEN: "Munich Beer Festival, Germany",
    descriptionVN: "Sự kiện bia lớn nhất thế giới với hơn 6 triệu người tham gia mỗi năm.",
    descriptionEN: "The world's largest beer festival, attracting over 6 million participants each year.",
    tall: false,
    Web: "/space/munich_beer_festival",
    WebVR: "https://virtual-gallery-main.vercel.app/virtouria/bia",
    model: "/Model/1bia.glb",
    imageModel: "/Model/1bia.png",
    author: "Admin",
    slug: "munich_beer_festival",
    tour: [
      {
      image: "/Tour/tour/1.png",
      title: "Tour khám phá Lễ hội Oktoberfest trọn vẹn",
      point: "8.1",
      price: "10.000.000 VND",
      descriptionVN: "Trải nghiệm một ngày tại lễ hội bia nổi tiếng nhất thế giới: thưởng thức bia thủ công, hòa vào âm nhạc Đức truyền thống và tham quan khu hội chợ.",
      descriptionEN: "A full-day experience at the world’s most famous beer festival: enjoy craft beers, traditional German music, and explore the vibrant fairground."
    },
    {
      image: "/Tour/tour/2.jpg",
      title: "Tour ẩm thực Bavaria & lễ hội",
      point: "9.2",
      price: "20.000.000 VND",
      descriptionVN: "Kết hợp lễ hội bia với hành trình khám phá ẩm thực Bavaria: xúc xích nướng, bánh mì Pretzel, thịt heo quay và các món đặc trưng vùng miền.",
      descriptionEN: "Combine beer festival with a culinary journey of Bavaria: grilled sausages, Pretzels, roasted pork, and regional specialties."
    },
    {
      image: "/Tour/tour/3.jpg",
      title: "Tour Lễ hội & khám phá Munich cổ kính",
      point: "9.5",
      price: "30.000.000 VND",
      descriptionVN: "Trải nghiệm lễ hội bia kết hợp tham quan lâu đài, quảng trường cổ Marienplatz và những điểm kiến trúc mang đậm văn hóa Đức.",
      descriptionEN: "Enjoy the beer festival while exploring castles, Marienplatz square, and Munich's iconic historical landmarks."
    },
    {
      image: "/Tour/tour/4.jpg",
      title: "Tour Lễ hội & đường lãng mạn nước Đức",
      point: "9.6",
      price: "35.000.000 VND",
      descriptionVN: "Sau khi tham dự lễ hội, bạn sẽ tiếp tục hành trình trên 'Đường lãng mạn' nổi tiếng với những ngôi làng cổ tích và lâu đài Neuschwanstein huyền thoại.",
      descriptionEN: "After the beer festival, embark on Germany’s Romantic Road with fairytale villages and the legendary Neuschwanstein Castle."
    },
    {
      image: "/Tour/tour/5.jpg",
      title: "Tour Lễ hội & trải nghiệm Berlin hiện đại",
      point: "9.7",
      price: "40.000.000 VND",
      descriptionVN: "Hành trình mở rộng sau lễ hội đến thủ đô Berlin: thăm Bức tường Berlin, Cổng Brandenburg và khám phá sự hòa quyện giữa lịch sử và hiện đại.",
      descriptionEN: "Extended journey to Berlin after the festival: visit the Berlin Wall, Brandenburg Gate, and explore the dynamic mix of history and modernity."
    }
    ]
  },
  {
    image: "/Tour/t2.png",
    titleVN: "Làng Gốm Bát Tràng, Việt Nam",
    titleEN: "Bat Trang Pottery Village, Vietnam",
    descriptionVN: "Một làng nghề truyền thống hơn 700 năm, nổi tiếng với các sản phẩm gốm tinh xảo, bền đẹp.",
    descriptionEN: "A traditional craft village with over 700 years of history, famous for its exquisite and durable ceramic products.",
    tall: true,
    Web: "/space/bat_trang_pottery_village",
    WebVR: "https://virtual-gallery-main.vercel.app/virtouria/gom",
    model: "/Model/3gom.glb",
    imageModel: "/Model/3gom.jpg",
    author: "Admin",
    slug: "bat_trang_pottery_village",
    tour: [
      {
      image: "/Tour/tour/6.webp",
      title: "Tour tự tay làm gốm truyền thống",
      point: "8.8",
      price: "350.000 VND",
      descriptionVN: "Trải nghiệm làm gốm cùng nghệ nhân: nặn đất, chuốt gốm và tự tay trang trí sản phẩm mang về.",
      descriptionEN: "Create your own ceramic with local artisans: shaping clay, wheel-throwing and decorating your personal souvenir."
    },
    {
      image: "/Tour/tour/7.jpg",
      title: "Tour tham quan Bảo tàng Gốm Bát Tràng",
      point: "9.0",
      price: "250.000 VND",
      descriptionVN: "Khám phá lịch sử hơn 700 năm qua hiện vật, phim tư liệu và kiến trúc độc đáo tại bảo tàng gốm đương đại.",
      descriptionEN: "Explore 700 years of ceramic history through artifacts, documentaries and modern architecture at the Bat Trang Pottery Museum."
    },
    {
      image: "/Tour/tour/8.webp",
      title: "Tour trải nghiệm ẩm thực và làng nghề Bát Tràng",
      point: "8.7",
      price: "400.000 VND",
      descriptionVN: "Thưởng thức món ăn dân dã tại làng nghề: bánh tẻ, bún riêu cua, bánh cuốn nóng,… kèm trà thảo mộc địa phương.",
      descriptionEN: "Enjoy local dishes in the village: rice cakes, crab noodle soup, steamed rolls, paired with local herbal tea."
    },
    {
      image: "/Tour/tour/9.jpg",
      title: "Tour đi bộ khám phá làng cổ Bát Tràng",
      point: "9.1",
      price: "300.000 VND",
      descriptionVN: "Đi bộ trong những con ngõ nhỏ, ghé thăm nhà cổ, lò gốm truyền thống và các xưởng gốm lâu đời.",
      descriptionEN: "Walk through narrow alleys, visit ancient houses, traditional kilns, and centuries-old pottery workshops."
    },
    ]
  },
  {
    image: "/Tour/t3.webp",
    titleVN: "Không gian ký ức – Kỷ niệm 30/4",
    titleEN: "Memory Space – Commemorating April 30th",
    descriptionVN: "Không gian 3D tái hiện một con phố Việt Nam vào dịp lễ 30/4 – Ngày Giải phóng miền Nam, thống nhất đất nước.",
    descriptionEN: "A 3D space recreating a Vietnamese street during the celebration of April 30th – Reunification Day.",
    tall: false,
    Web: "/space/30th_april",
    WebVR: "https://virtual-gallery-main.vercel.app/virtouria/30thang4",
    model: "/Model/4_30thang4.glb",
    imageModel: "Model/4_30thang4.jpg",
    author: "Admin",
    slug: "30th_april",
    tour: [
      {
      image: "/Tour/tour/10.jpg",
      title: "Tour phố cổ ngày lễ 30/4",
      point: "8.9",
      price: "200.000 VND",
      descriptionVN: "Dạo bước giữa không gian tái hiện phố cổ Việt Nam vào dịp đại lễ 30/4 với cờ đỏ, biểu ngữ, loa phát thanh và không khí tưng bừng.",
      descriptionEN: "Stroll through a recreated old Vietnamese street on April 30th with red flags, banners, loudspeakers and vibrant atmosphere."
    },
    {
      image: "/Tour/tour/11.webp",
      title: "Tour bảo tàng ký ức thống nhất",
      point: "9.3",
      price: "300.000 VND",
      descriptionVN: "Tham quan bảo tàng tương tác ảo với tư liệu lịch sử, ảnh tư liệu, hồi ký chiến sĩ và video tư liệu quý hiếm về ngày 30/4/1975.",
      descriptionEN: "Visit an interactive virtual museum with historical records, war memoirs, and rare footage of the historic April 30th, 1975."
    },
    {
      image: "/Tour/tour/12.jpg",
      title: "Tour âm nhạc cách mạng",
      point: "8.7",
      price: "150.000 VND",
      descriptionVN: "Nghe lại những ca khúc đi cùng năm tháng, hòa mình vào không gian âm nhạc đầy xúc động của ngày thống nhất.",
      descriptionEN: "Listen to revolutionary songs that shaped history, immersing yourself in the emotional soundtrack of Vietnam's reunification."
    },
    ]
  },
  {
    image: "/Tour/t5.jpg",
    titleVN: "Phòng Trưng Bày Tranh Di Sản Văn Hóa Việt Nam Qua Hội Họa",
    titleEN: "Exhibition Room – Vietnamese Cultural Heritage Through Fine Arts",
    descriptionVN: "Không gian trưng bày tranh 3D tái hiện các tác phẩm xuất sắc đạt giải từ cuộc thi toàn quốc “Di sản văn hóa Việt Nam qua hội họa” lần thứ I. ",
    descriptionEN: "A 3D virtual exhibition space showcasing award-winning paintings from the 1st national contest 'Vietnamese Cultural Heritage Through Fine Arts'. ",
    tall: true,
    Web: "/space/vietnamese_cultural_heritage",
    WebVR: "https://baotangdisanso.vercel.app/",
    model: "/Model/5cuocthidisan.glb",
    imageModel: "/Model/5cuocthidisan.jpg",
    author: "Admin",
    slug: "vietnamese_cultural_heritage",
    tour: [
    {
      image: "/Tour/tout/13.jpg",
      title: "Workshop vẽ tranh làng nghề truyền thống",
      point: "9.1",
      price: "220.000 VND",
      descriptionVN: "Khám phá vẻ đẹp các làng nghề truyền thống qua tranh: gốm Bát Tràng, lụa Vạn Phúc, tranh Đông Hồ,…",
      descriptionEN: "Discover paintings of traditional craft villages like Bat Trang pottery, Van Phuc silk, and Dong Ho woodblock prints."
    },
    ]
  },
  {
    image: "/Tour/t5.avif",
    titleVN: "Không gian triển lãm Nét Đẹp Việt 2025",
    titleEN: "Vietnamese Beauty 2025 Exhibition Space",
    descriptionVN: "Không gian ảo được thiết kế nhằm quảng bá cho sự kiện 'Nét Đẹp Việt' mùa 2 – chiến dịch do TikTok khởi xướng, kết hợp cùng các nghệ sĩ trẻ nổi bật. Với chủ đề 'Xưa & Nay qua lăng kính tuổi trẻ'",
    descriptionEN: "A virtual exhibition space promoting 'Vietnamese Beauty Season 2' – a national campaign by TikTok featuring young influential artists. With the theme 'Past & Present Through the Lens of Youth'",
    tall: true,
    Web: "/space/vietnamese_beauty_2025",
    WebVR: "https://game-bao-ton-di-san.vercel.app/",
    model: "/Model/6tournetdepviet.glb",
    imageModel: "/Model/6tournetdepviet.jpg",
    author: "Admin",
    slug: "vietnamese_beauty_2025",
    tour: [
      {
      image: "/Tour/tour/14.webp",
      title: "Workshop sáng tạo di sản qua TikTok",
      point: "9.3",
      price: "Miễn phí",
      descriptionVN: "Cùng các nhà sáng tạo trẻ tái hiện di sản văn hóa Việt qua góc nhìn hiện đại: dựng video, chèn âm nhạc, sử dụng filter đặc trưng.",
      descriptionEN: "Join young creators in reimagining Vietnamese heritage through TikTok videos, music remixes, and creative filters."
    },
    {
      image: "/Tour/tour/15.webp",
      title: "Tour trình diễn áo dài & thời trang dân tộc",
      point: "9.5",
      price: "200.000 VND",
      descriptionVN: "Chiêm ngưỡng bộ sưu tập áo dài và thiết kế lấy cảm hứng từ văn hóa dân tộc, kết hợp trình diễn thực tế ảo và nghệ thuật số.",
      descriptionEN: "Experience ao dai collections and ethnic-inspired fashion through virtual runway shows and digital art integration."
    },
    {
      image: "/Tour/tour/16.webp",
      title: "Tour âm nhạc truyền thống remix",
      point: "8.9",
      price: "150.000 VND",
      descriptionVN: "Lắng nghe âm nhạc dân gian Việt Nam được làm mới bởi các nghệ sĩ trẻ: từ quan họ đến cải lương kết hợp EDM, lo-fi.",
      descriptionEN: "Enjoy remixed traditional Vietnamese music by Gen Z artists: from folk tunes to EDM-infused cai luong and lo-fi."
    },
    {
      image: "/Tour/tour/17.jpeg",
      title: "Tour trải nghiệm văn hóa qua AR",
      point: "9.2",
      price: "250.000 VND",
      descriptionVN: "Khám phá các hoạt động như nấu món cổ truyền, dựng cảnh lễ hội, thử trang phục dân tộc… qua công nghệ thực tế tăng cường.",
      descriptionEN: "Engage in activities like traditional cooking, festival simulations, and ethnic costumes using augmented reality."
    },
    {
      image: "/Tour/tour/18.jfif",
      title: "Workshop vẽ 3D chủ đề Việt Nam xưa & nay",
      point: "9.0",
      price: "300.000 VND",
      descriptionVN: "Tham gia workshop nghệ thuật số với chủ đề 'Xưa & Nay', vẽ 3D bằng phần mềm sáng tạo – dành cho bạn trẻ yêu hội họa hiện đại.",
      descriptionEN: "Join a digital art workshop themed 'Then & Now', using 3D creative tools – perfect for modern visual storytellers."
    }
    ]
  },
  {
    image: "/Tour/t6.png",
    titleVN: "Lễ Hội Thả Đèn Trời, Đài Loan",
    titleEN: "Sky Lantern Festival, Taiwan",
    descriptionVN: "Một lễ hội truyền thống hàng trăm năm tại làng Thập Phần.",
    descriptionEN: "A centuries-old traditional festival in Shifen Village, where thousands of lanterns light up the night sky.",
    tall: true,
    Web: "/space/sky_lantern_festival",
    WebVR: "https://virtual-gallery-main.vercel.app/virtouria/denlong",
    model: "/Model/2denlong.glb",
    imageModel: "/Model/2denlong.jpg",
    author: "Admin",
    slug: "sky_lantern_festival",
    tour: [
    {
      image: "/Tour/tour/19.jpg",
      title: "Tour khám phá làng Thập Phần",
      point: "8.8",
      price: "250.000 VND",
      descriptionVN: "Dạo bước qua phố cổ Shifen với đường ray tàu hỏa, chợ truyền thống và các cửa hàng lưu niệm độc đáo.",
      descriptionEN: "Take a stroll through Shifen Old Street, with railway tracks, traditional markets, and unique souvenir shops."
    },
    {
      image: "/Tour/tour/20.png",
      title: "Tour làm đèn trời truyền thống",
      point: "9.0",
      price: "200.000 VND",
      descriptionVN: "Học cách làm đèn trời từ giấy, viết điều ước theo phong tục xưa và hiểu ý nghĩa tâm linh của mỗi màu sắc.",
      descriptionEN: "Learn to make sky lanterns, write wishes in the traditional way, and understand the symbolism behind each color."
    },
    {
      image: "/Tour/tour/21.jpg",
      title: "Tour đêm lễ hội ánh sáng",
      point: "9.4",
      price: "300.000 VND",
      descriptionVN: "Chiêm ngưỡng hàng ngàn chiếc đèn bay cùng lúc trong đêm, kết hợp âm nhạc và lời chúc thiêng liêng từ người tham dự.",
      descriptionEN: "Witness thousands of lanterns soaring into the night, accompanied by music and heartfelt wishes from participants."
    },
    ]
  },
  {
    image: "/Tour/t6.jpg",
    titleVN: "Không gian sáng tạo Trường VNU-SIS",
    titleEN: "Creative Space of VNU-SIS",
    descriptionVN: "Không gian 3D tương tác được thiết kế để quảng bá và trình diễn các sản phẩm sáng tạo, nghiên cứu và đổi mới đến từ nhiều lĩnh vực khác nhau của sinh viên Trường Khoa học Liên ngành và Nghệ thuật, Đại học Quốc gia Hà Nội (VNU-SIS). ",
    descriptionEN: "An interactive 3D space designed to showcase and promote creative, research, and innovative projects across various fields by students of the VNU School of Interdisciplinary Sciences and Arts (VNU-SIS). ",
    tall: false,
    Web: "/space/vnu_sis_creative_space",
    WebVR: "https://virtualgalleryfull.vercel.app/nghe-thuat-sang-tao",
    model: "/Model/7baotangntst.glb",
    imageModel: "/Model/7baotangntst.jpg",
    author: "Admin",
    slug: "vnu_sis_creative_space",
    tour: [
      {
      image: "/Tour/tour/22.webp",
      title: "Tour khám phá sản phẩm liên ngành",
      point: "9.3",
      price: "Miễn phí",
      descriptionVN: "Chiêm ngưỡng các dự án kết hợp giữa nghệ thuật, công nghệ, khoa học và xã hội – phản ánh tinh thần liên ngành độc đáo của VNU-SIS.",
      descriptionEN: "Explore multidisciplinary projects blending art, technology, science, and society – a signature of VNU-SIS innovation."
    },
    {
      image: "/Tour/tour/23.jpg",
      title: "Tour tham quan phòng lab thiết kế & sáng tạo",
      point: "9.1",
      price: "100.000 VND",
      descriptionVN: "Trải nghiệm không gian làm việc của sinh viên thiết kế sáng tạo với công cụ ảo: in 3D, mô phỏng XR, nghệ thuật số.",
      descriptionEN: "Experience student design labs with virtual tools: 3D printing, XR simulation, and digital art creation."
    },
    {
      image: "/Tour/tour/24.webp",
      title: "Tour khám phá không gian nghệ thuật thị giác",
      point: "9.4",
      price: "200.000 VND",
      descriptionVN: "Thưởng thức các tác phẩm nghệ thuật số, sắp đặt, video art và tranh tương tác do sinh viên thực hiện.",
      descriptionEN: "Enjoy digital art, installation pieces, video art, and interactive paintings by VNU-SIS students."
    },
    {
      image: "/Tour/tour/25.jpg",
      title: "Workshop đổi mới sáng tạo dành cho bạn trẻ",
      point: "9.5",
      price: "300.000 VND",
      descriptionVN: "Tham gia workshop sáng tạo liên ngành – nơi các bạn trẻ cùng nhau giải quyết vấn đề xã hội bằng tư duy thiết kế.",
      descriptionEN: "Join a youth interdisciplinary innovation workshop to solve real-world challenges with design thinking."
    }
    ]
  },
  {
    image: "/Tour/t8.png",
    titleVN: "Lễ Hội Bia Munich, Đức",
    titleEN: "Munich Beer Festival, Germany",
    descriptionVN: "Sự kiện bia lớn nhất thế giới với hơn 6 triệu người tham gia mỗi năm.",
    descriptionEN: "The world's largest beer festival, attracting over 6 million participants each year.",
    tall: false,
    Web: "/space/munich_beer_festival",
    WebVR: "https://virtual-gallery-main.vercel.app/virtouria/bia",
    model: "/Model/1bia.glb",
    imageModel: "/Model/1bia.png",
    author: "Admin",
    slug: "munich_beer_festival",
    tour: [
      
    ]
  }
];
export default festivals;