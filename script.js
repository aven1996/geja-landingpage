/* Geja Furniture — katalog statis
   Ganti nomor WhatsApp, alamat, email, dan data produk pada bagian CONFIG/DATA.
*/
const CONFIG = {
  whatsapp: "6281904985979",
  email: "hello@gejafurniture.id",
  currency: "IDR"
};

const products = [
  {
    id: "GEJA-001",
    name: "Geja - Lampu Tidur ESC tombol keyboard / Lampu Tidur Hias Aesthetic LED",
    cat: "Lampu",
    brand: "Geja Furniture",
    price: 189000,
    material: "-",
    color: "LED Warna Warni",
    size: "13 x 13 x 8 cm",
    shopee: "https://shopee.co.id/Geja-Lampu-Tidur-ESC-tombol-keyboard-Lampu-Tidur-Hias-Aesthetic-LED-i.20077758.48667775191?extraParams=%7B%22display_model_id%22%3A411502112726%2C%22model_selection_logic%22%3A3%7D",
    images: [
      "images/LAMPU.png","images/LAMPU (1).png", "images/LAMPU (2).png", "images/LAMPU (3).png"
    ],
    desc: `Geja - LAMP . Lampu Tidur ESC Tombol Keyboard Minimalis / Lampu Hias Aesthetic LED Dekorasi 

            Ukuran :
            13 x 13 x 8 cm

            Tegangan : 
            220V

            Dilengkapi dengan :
            Remote ( Mengganti warna lampu ) 

            Produk yang dikirim :
            - 1 Buah Lampu Tidur
            - 1 Buah Remote

            Cocok Untuk :
            - Dekorasi Unik
            - Hadiah 
            - Kado 

            Pre Order PO : 2-5 Hari`
  },
  {
    id: "GEJA-002",
    name: "Geja - Lampu Tidur Ulat Minimalis / Lampu Tidur Hias Aesthetic LED Dekorasi",
    cat: "Lampu",
    brand: "Geja Furniture",
    price: 590000,
    material: "-",
    color: "LED Warna Warni",
    size: "40 x 20 x 30 cm",
    shopee: "https://shopee.co.id/Geja-Lampu-Tidur-Ulat-Minimalis-Lampu-Tidur-Hias-Aesthetic-LED-Dekorasi-i.20077758.49017765830?extraParams=%7B%22display_model_id%22%3A421502285363%2C%22model_selection_logic%22%3A3%7D",
    images: [
      "images/LAMPU2.png",
      "images/LAMPU2 (1).png",
      "images/LAMPU2 (2).png",
      "images/LAMPU2 (3).png",
      "images/LAMPU2 (4).png",
      "images/LAMPU2 (5).png",
      "images/LAMPU2 (6).png"
    ],
    desc: `Geja Lampu Tidur Ulat Minimalis / Lampu Hias Aesthetic LED Dekorasi

            Ukuran :
            40 x 20 x 30 cm

            Tegangan : 
            220V

            Cocok Untuk :
            Dekorasi Unik
            Hadiah	
            Kado

            Pre Order (PO) : 3-5 Hari`
  },
  {
    id: "GEJA-003",
    name: "Geja - Sofa 2 Seater Pillo Minimalis Modern Aesthetic",
    cat: "Kursi",
    brand: "Geja Furniture",
    price: 5449000,
    material: "Pelapis Kain Mebel",
    color: "Milk",
    size: "145 x 80 x 88 cm",
    shopee: "https://shopee.co.id/Geja-Sofa-2-Seater-Pillo-Minimalis-Modern-Aesthetic-i.20077758.53317934399?extraParams=%7B%22display_model_id%22%3A108799951173%2C%22model_selection_logic%22%3A3%7D",
    images: [
      "images/sofa1.webp",
      "images/sofa2.webp",
      "images/sofa3.webp",
      "images/sofa4.webp",
      "images/sofa5.webp"
    ],
    desc: `Geja - Sofa 2 Seater Pillo Minimalis Modern Japandi Aesthetic

            Kursi sofa minimalis ini dirancang dengan desain yang  ergonomis dan juga stylish. Desain kaki model silinder dari sofa santai ini dirancang menggunakan material berkualitas sehingga begitu kokoh. Hunian pun terasa lebih modern dan juga aesthetic.

            Desain Organik & Modern:
            Model sofa ini tentu berbeda dengan yang lainnya sehingga cocok untuk Anda yang menginginkan desain furniture unik.
            Bagi Anda yang mengusung konsep interior Japandi, MidCentury, maupun Minimalis maka cocok menggunakan sofa aesthetic ini.

            Material:
            - Kain 100% high quality
            - Tekstur halus suede premium
            - Durabilitasnya tinggi
            - Busa empuk royam foam grade A
            - Mudah dibersihkan

            Proses Perawatan:
            - Bersihkan debu / bulu kotoran hewan menggunakan vacuum cleaner
            - Segera lap menggunakan tisu atau kain kering jika terkena noda
            - Hindari menggosok kain terlalu keras agar serat kain tetap awet

            Produk yang Dikirim:
            1 Buah Sofa

            Kenyamanan Maksimal:
            Dudukan empuk dengan kepadatan busa tinggi, nyaman digunakan untuk:
            - Bersantai
            - Membaca buku
            - Sebagai penambah dekorasi ruang tamu
            - Konstruksi Kokoh:

            Dilengkapi dengan kaki penopang yang besar dan stabil, mampu menahan beban dengan aman.
            - Warna:
            Milk

            Cocok Diletakkan di:
            - Ruang Tamu
            - Kamar Tidur
            - Studio Foto
            - Coffee Shop

            Ukuran Sofa 2 Seater:
            145 x 80 x 88 cm

            Estimasi Produk Pre Order 2-3 minggu.
            (Apabila produksi lebih cepat, maka akan diinformasikan melalui chat oleh admin)

            Catatan:
            WAJIB tanyakan stok atau variasi produk sebelum membeli.
            Dapatkan gratis ongkir ke wilayah Jawa untuk semua produk`
  },
  {
    id: "GEJA-004",
    name: "Geja - Sofa 1 Seater Pillo Single Chair Minimalis Aesthetic",
    cat: "Sofa",
    brand: "Geja Furniture",
    price: 3399000,
    material: "Pelapis Kain Mebel",
    color: "Milk",
    size: "85 x 77 x 88  cm",
    shopee: "https://shopee.co.id/Geja-Sofa-1-Seater-Pillo-Single-Chair-Minimalis-Aesthetic-i.20077758.52217934538?extraParams=%7B%22display_model_id%22%3A316518919026%2C%22model_selection_logic%22%3A3%7D",
    images: [
      "images/sofa2_1.webp",
      "images/sofa2_2.webp",
      "images/sofa2_3.webp",
      "images/sofa2_4.webp"
    ],
    desc: `Geja - Sofa 1 Seater Pillo Single Chair Minimalis Aesthetic

            Kursi sofa minimalis ini dirancang dengan desain yang ergonomis dan juga stylish. Desain kaki model silinder dari sofa santai ini dirancang menggunakan material berkualitas sehingga begitu kokoh. Hunian pun terasa lebih modern dan juga aesthetic.

            Ukuran produk:
            85 x 77 x 88 cm

            Proses Perawatan:
            - Bersihkan debu / bulu kotoran hewan menggunakan vacuum cleaner
            - Segera lap menggunakan tisu atau kain kering jika terkena noda
            - Hindari menggosok kain terlalu keras agar serat kain tetap awet

            Produk yang Dikirim:
            1 Buah Sofa

            Material:
            - Tekstur halus suede premium
            - Busa empuk royam foam grade A
            - Menggunakan 100% kayu solid high quality

            Kenyamanan Maksimal:
            Dudukan empuk dengan kepadatan busa tinggi, nyaman digunakan untuk:
            - Bersantai
            - Membaca buku
            - Sebagai penambah dekorasi ruang tamu

            Cocok Diletakkan di:
            - Ruang Tamu
            - Kamar Tidur
            - Studio Foto
            - Coffee Shop

            Estimasi Produk Pre Order 1-2 minggu.
            (Apabila produksi lebih cepat, maka akan diinformasikan melalui chat oleh admin)`
  },
  {
    id: "GEJA-005",
    name: "Geja - Kursi Teras Kayo Set 2-1-1 Seater Minimalis Modern Aesthetic",
    cat: "Sofa",
    brand: "Geja Furniture",
    price: 9049000,
    material: "Kayu Jati, Kain Anti Cakar, Busa Royal Foam Premium",
    color: "-",
    size: "75 x 80 x 80 cm",
    shopee: "https://shopee.co.id/Geja-Kursi-Teras-Kayo-Set-2-1-1-Seater-Minimalis-Modern-Aesthetic-i.20077758.45567959871?extraParams=%7B%22display_model_id%22%3A381518396293%2C%22model_selection_logic%22%3A3%7D",
    images: [
      "images/sofa3_1.webp",
      "images/sofa3_2.webp",
      "images/sofa3_3.webp",
      "images/sofa3_4.webp",  
      "images/sofa3_5.webp"
    ],
    desc: `Geja - Kursi Teras Kayo Set 2-1-1 Seater Minimalis Modern

            Hadirkan nuansa klasik dan modern jadi satu lewat kursi teras dari Geja sekarang yuk! Desainnya yang berpadu dengan siluet minimalis dan modern mampu menciptakan atmosfer yang timeless dan berkelas. So, kamu nggak perlu khawatir lagi kalau mau menampilkan suasana vintage zaman dulu tapi tetep keliatan kekinian.

            Proses Perawatan:

            - Bersihkan debu / bulu kotoran hewan menggunakan vacuum cleaner
            - Segera lap menggunakan tisu atau kain kering jika terkena noda
            - Hindari menggosok kain terlalu keras agar serat kain tetap awet

            Produk yang Dikirim:
            1 buah (Kursi 2 Seater Kayo)
            2 buah (Kursi 1 Seater Kayo)
            (Tanpa Meja)

            Material:
            - Rangka kaki sofa asli 100% asli kayu jati
            - Kain anti cakar
            - Busa royal foam premium
            - Dilengkapi antı slip, all.


            Ukuran Produk:
            75x80x80 cm (Kursi Ukuran 1 Seater)
            135x80x80 cm (Kursi Ukuran 2 Seater)

            Kenapa harus punya Kursi Set Kurata 2-1-1 Seater?

            - Kaki Kayu Asli 100% Jati:
            Rangka kursi ini asli menggunakan kayu asli sehingga kokoh
            dan tahan lama. Tampilannya pun juga makin manis karena ada aksen kayu naturalnya.

            - Muat Banyak:
            Sofa set ini tentunya bisa untuk duduk banyak orang. Kamu bisa menerima 3-4 tamu di sini tanpa harus takut duduk berdesak-desakan.

            - Kainnya Anti Cakar:
            Dudukan kursi set ini menggunakan kain anti cakar. Dengan begitu, kamu tidak lagi khawatir jika kucingmu bermain-main di area sini.

            Cocok diletakkan di :
            - Ruang keluarga
            - Ruang tamu
            - Teras rumah
            - Balkon

            Garansi : 1 Tahun (Busa, Kerangka, Kena Rayap Diganti
            100% Baru)

            Estimasi Produk Pre Order 4-5 minggu.
            (Apabila produksi lebih cepat, maka akan diinformasikan melalui chat oleh admin)`
  },
  {
    id: "GEJA-006",
    name: "Geja - Sofa Shizu 3 Seater Premium Anti Cakar Minimalis Modern Aesthetic",
    cat: "Sofa",
    brand: "Geja Furniture",
    price: 8799000,
    material: "Kayu Jati, Kain Anti Cakar, Busa Royal Foam Premium",
    color: "Natural",
    size: "250 x 90 x 75 cm",
    shopee: "https://shopee.co.id/Geja-Sofa-Shizu-3-Seater-Premium-Anti-Cakar-Minimalis-Modern-Aesthetic-i.20077758.52917879698?extraParams=%7B%22display_model_id%22%3A341513902586%2C%22model_selection_logic%22%3A3%7D",
    images: [
      "images/sofa4_1.webp",
      "images/sofa4_2.webp",
      "images/sofa4_3.webp",
      "images/sofa4_4.webp",
      "images/sofa4_5.webp",
      "images/sofa4_6.webp",
      "images/sofa4_7.webp",
      "images/sofa4_8.webp"
    ],
    desc: `Temukan sentuhan cozy dan aesthetic modern untuk ruang tamu . Geja - Sofa Shizu 3 Seater Premium dari Geja menghadirkan kenyamanan empuk, tampilan minimalis, dan nuansa Japandi yang memanjakan. Nyaman untuk nonton film, hangout keluarga, hingga WFH di rumah.

    Keunggulan Utama
    - Dudukan lepasan dengan resleting: kain dudukan bisa dibuka dan dicuci.
    - Pegas pocket spring/ulir: empuk dan nyaman.
    - Kain anti cakar (kucing) dan anti slip: lebih tenang saat ada hewan peliharaan.
    - Busa royal foam premium: nyaman untuk duduk dan bersantai.
    - Rangka kaki 100% kayu jati asli: kokoh dan elegan.
    - Bonus: 3 bantal sandaran minimalis + 1 kantong pocket organizer.
    - Bebas pilih finishing kaki kayu (silakan chat admin).

    Perbedaan Shizu Standar vs Premium
    - Shizu Standar: dudukan paten, pegas zigzag, dimensi 250 x 80 x 75 cm.
    - Shizu Premium: dudukan lepasan (resleting), pegas pocket spring/ulir lebih empuk, dimensi 250 x 90 x 75 cm (lebih lebar 10 cm dibanding standar).

    Perawatan & Pembersihan
    - Bersihkan debu/bulu/kotoran hewan menggunakan vacuum cleaner.
    - Segera lap dengan tisu/kain kering jika terkena noda.
    - Hindari menggosok kain terlalu keras agar serat kain tetap awet.
    - Buka cover bantal sandaran, lalu jemur dan angin-anginkan.

    Informasi Tambahan
    - Asal Produk: Indonesia
    - Garansi: 12 bulan (Garansi Produsen) — Busa, kerangka, kena rayap diganti 100% baru.
    - Perakitan: Sudah dirakit
    - Koleksi Barang Antik: Tidak
    - Furniture Lipat: Tidak
    - Produk Custom: Tidak
    - Estimasi Pre Order: 2–3 minggu (jika produksi lebih cepat, akan diinformasikan via chat)
    - Catatan pembelian: Wajib tanya stok/variasi sebelum membeli.
    - Pengiriman: Gratis ongkir ke wilayah Jawa (pilih Kargo). Area DIY/Jateng/Jatim tertentu dapat subsidi ongkir; silakan hubungi admin via chat untuk info gratis ongkir/subsidi ke kotamu.`
  },
  {
    id: "GEJA-007",
    name: "Geja - Sofa Shizu Premium 2 Seater Anti Cakar Minimalis Modern",
    cat: "Sofa",
    brand: "Geja Furniture",
    price: 6799000,
    material: "Kayu Jati, Kain Anti Cakar, Busa Royal Foam Premium",
    color: "-",
    size: "180 x 90 x 75 cm",
    shopee: "https://shopee.co.id/Geja-Sofa-Shizu-Premium-2-Seater-Anti-Cakar-Minimalis-Modern-i.20077758.47317910535?extraParams=%7B%22display_model_id%22%3A341513845756%2C%22model_selection_logic%22%3A3%7D",
    images: [
      "images/sofa5_1.webp",
      "images/sofa5_2.webp",
      "images/sofa5_3.webp",
      "images/sofa5_4.webp",
      "images/sofa5_5.webp"
    ],
    desc: `Geja - Sofa Shizu 2 Seater Premium Anti Cakar Minimalis Modern

          Waktunya bikin rumah makin aesthetic ala Pinterest modal Sota Shizu dari Geja yuk! Udah banyak influencer home decor hingga beberapa artis ternama yang pakai Sofa Shizu nih gaes! Checkout sekarang yuk buat mempercantik hunianmu!

          Material:
          - Rangka kaki asli 100% asli kayu jati
          - Kain anti cakar* (kucing dan anjing)
          - Busa royal foam premium
          - Dilengkapi anti slip, dll.

          Bonus:
          - 2 bantal sandaran minimalis
          - 1 kantong pocket organizer
          - bebas pilih finishing kaki kayu (silakan chat admin)

          Proses Perawatan:
          - Bersihkan debu / bulu kotoran hewan menggunakan vacuum cleaner
          - Segera lap menggunakan tisu atau kain kering jika terkena noda
          - Hindari menggosok kain terlalu keras agar serat kain tetap awet
          - Buka cover bantal sandaran lalu jemur dan angin-anginkan

          Produk yang Dikirim:
          1 Buah Sofa + Bonus Bantal Sandaran + Kantong Pocket T Organizer

          Ukuran:
          180 x 90 x75 cm

          Apa Bedanya Shizu Standar vs Premium?
          Shizu Standar
          * Dudukannya paten
          * Pegas menggunakan Zigzag
          * Dimensi 2 seater 180*90*75 cm

          Shizu Premium
          * Dudukannya Lepasan (terdapat resleting pada kain dudukan sehingga kain bisa dibuka dan dicuci)
          * Pegas menggunakan pocket spring/ ulir sehingga lebih empuk
          * Dimensi 2 seater 180*90*75 cm (lebih lebar 10cm dibanding shizu standar)

          Estimasi Produk Pre Order 2-3 minggu.
          (Apabila produksi lebih cepat, maka akan diinformasikan melalui chat oleh admin)

          Catatan:
          WAJIB tanyakan stok atau variasi produk sebelum membeli.

          Garansi:
          3 Tahun (Busa, Kerangka, Kena Rayap Diganti 100% Baru)

          Dapatkan gratis ongkir ke wilayah Jawa untuk semua produk . Silahkan hubungi admin melalui fitur chat untuk mendapatkan informasi terkait gratis ongkir dan subsidi ongkir ke kotamu !

          (Silakan pilih pengiriman menggunakan Kargo)`
  },
  {
    id: "GEJA-008",
    name: "Geja - Standing Mirror Pebble / Cermin Minimalis Lonjong Atas Full Body Aesthetic",
    cat: "Cermin",
    brand: "Geja Furniture",
    price: 900000,
    material: "Kain Beludru, Plywood, Kaca",
    color: "-",
    size: "160 x 60 cm",
    shopee: "https://shopee.co.id/Geja-Standing-Mirror-Pebble-Cermin-Minimalis-Lonjong-Atas-Full-Body-Aesthetic-i.20077758.53867850734?extraParams=%7B%22display_model_id%22%3A431510833041%2C%22model_selection_logic%22%3A3%7D",
    images: [
      "images/cermin1_1.webp",
      "images/cermin1_2.webp",
      "images/cermin1_3.webp"
    ],
    desc: `Wujudkan sudut kamar yang rapi dan estetik dengan Cermin Lonjong Atas Full Body dari Geja. Desainnya modern minimalis yang elegan, memberi kesan luas dan bersih—teman setia untuk ritual harian dan momen OOTD.

      Keunggulan Utama
      - Full body aesthetic: refleksi satubadan yang membantu styling dan penataan penampilan.
      - Desain kekinian tanpa norak: mudah dipadukan dengan berbagai gaya ruangan.
      - Material premium: 100% asli kayu jati, frame high quality, dan penyangga kokoh.
      - Kaca dinding untuk hasil tampilan yang rapi dan fungsional.

      Desain & Material
      - Bahan: 100% asli kayu jati, frame high quality, penyangga kokoh.
      - Kaca: kaca dinding.
      - Detail: dilengkapi kain pelapis yang lembut untuk sentuhan lebih nyaman.

      Ukuran & Bentuk
      - Ukuran cermin: 160 x 60 cm.
      - Bentuk cermin: persegi panjang.

      Perawatan & Penempatan
      - Gunakan vacuum cleaner dengan nozzle brush halus.
      - Jika terkena noda, jangan digosok secara kasar; bersihkan dengan kain bersih + sedikit air hangat + sedikit sabun cair, lalu keringkan dengan tisu kering.
      - Hindari paparan sinar matahari langsung.
      - Jangan letakkan di dekat kamar mandi basah/area lembab untuk menghindari jamur.
      - Beri celah 1–2 cm di belakang cermin agar sirkulasi udara tetap lancar.

      Pengiriman & Catatan Penting
      - Produk yang dikirim: 1 buah standing mirror.
      - Estimasi pre-order: 1-2 minggu (jika produksi lebih cepat, akan diinformasikan via chat).
      - Catatan harga: Harga di aplikasi hanya untuk pengiriman resi; WAJIB konfirmasi sebelum membeli karena produk dikirim menggunakan ekspedisi toko.
      - Gratis ongkir ke wilayah Jawa (sesuai area yang tercantum); di luar area tersebut dapat subsidi ongkir—silakan hubungi admin via chat untuk info lengkap.`
  },
  {
    id: "GEJA-009",
    name: "Geja - Sofa Shizu 3 Seater Sudut Premium Anti Cakar Minimalis Modern Aesthetic",
    cat: "Sofa",
    brand: "Geja Furniture",
    price: 12099000,
    material: "Kayu Jati, Kain Anti Cakar, Busa Royal Foam Premium",
    color: "-",
    size: "250 x 90 x 75 cm",
    shopee: "https://shopee.co.id/Geja-Sofa-Shizu-3-Seater-Sudut-Premium-Anti-Cakar-Minimalis-Modern-Aesthetic-i.20077758.52467890925?extraParams=%7B%22display_model_id%22%3A259345487477%2C%22model_selection_logic%22%3A3%7D",
    images: [
      "images/sofa6_1.webp",
      "images/sofa6_2.webp",
      "images/sofa6_3.webp",
      "images/sofa6_4.webp",
      "images/sofa6_5.webp",
      "images/sofa6_6.webp"
    ],
    desc: `Geja - Sofa Shizu 3 Seater Sudut Premium Anti Cakar Cocok Untuk Nonton Netflix , Hangout Keluarga , hingga WFH di Rumah.

    Waktunya bikin rumah makin aesthetic ala Pinterest modal Sofa Shizu dari Geja yuk! Udah banyak influencer home decor hingga beberapa artis ternama yang pakai Sofa Shizu nih gaes! Checkout sekarang yuk buat mempercantik hunianmu.

    Material:
    - Rangka kaki asli 100% asli kayu jati
    - Kain anti cakar* (kucing)
    - Busa royal foam premium
    - Dilengkapi anti slip, dll.

    Bonus:
    - 3 bantal sandaran minimalis
    - 1 kantong pocket organizer
    - bebas pilih finishing kaki kayu (silakan chat admin)

    Proses Perawatan:
    - Bersihkan debu / bulu kotoran hewan menggunakan vacuum cleaner
    - Segera lap menggunakan tisu atau kain kering jika terkena noda
    - Hindari menggosok kain terlalu keras agar serat kain tetap awet
    - Buka cover bantal sandaran lalu jemur dan angin-anginkan

    Produk yang Dikirim:
    1 Buah Sofa + 1 Puff Kotak + Bonus Bantal Sandaran +
    Kantong Pocket Organizer

    Ukuran Sofa:
    250 x 90 x 75 cm

    Ukuran Puff Kotak:
    80 × 90 x 30 cm

    Apa Bedanya Shizu Standar vs Premium?

    Shizu Standar
    * Dudukannya paten
    * Pegas menggunakan Zigzag
    * Dimensi 3 seater 250*80*75 cm

    Shizu Premium
    * Dudukannya Lepasan (terdapat resleting pada kain dudukan sehingga kain bisa dibuka dan dicuci)
    * Pegas menggunakan pocket spring/ ulir sehingga lebih empuk
    * Dimensi 3 seater 250*90*75 cm (lebih lebar 10cm
    dibanding shizu standar)

    Estimasi Produk Pre Order 2-3 minggu.
    (Apabila produksi lebih cepat, maka akan diinformasikan melalui chat oleh admin)

    Catatan:
    WAJIB tanyakan stok atau variasi produk sebelum membeli.

    Garansi:
    1 Tahun (Busa, Kerangka, Kena Rayap Diganti 100% Baru)
    Dapatkan gratis ongkir ke wilayah Jawa`
  },
  {
    id: "GEJA-010",
    name: "Geja - Lampu Tidur Bonsai / Lampu Hias 3D Malam Hari Model Tanaman Dekorasi",
    cat: "Lampu",
    brand: "Geja Furniture",
    price: 280000,
    material: "Plastik",
    color: "-",
    size: "20 x 15.5 x 23.5 cm",
    shopee: "https://shopee.co.id/Geja-Lampu-Tidur-Bonsai-Lampu-Hias-3D-Malam-Hari-Model-Tanaman-Dekorasi-i.20077758.45967770687?extraParams=%7B%22display_model_id%22%3A311502805991%2C%22model_selection_logic%22%3A3%7D",
    images: [
      "images/lampu3_1.webp",
      "images/lampu3_2.webp",
      "images/lampu3_3.webp",
      "images/lampu3_4.webp",
      "images/lampu3_5.webp",
      "images/lampu3_5.webp"
    ],
    desc: `Geja Lamp - Lampu Tidur Bonsai / Lampu Tidur 3D Malam Hari Model Tanaman Dekorasi Hias

          Ukuran :
          20 x 15.5 x 23.5 cm

          Dilengkapi dengan :
          Remote Lampu 

          Fitur :
          LED Ganti Warna

          Cocok untuk :
          Dekorasi Unik
          Hadiah
          Kado

          Pre Oder (PO) : 3-5 Hari`
  },
  {
    id: "GEJA-011",
    name: "Geja - Sofa Bed Becca Reclining Minimalis Modern / Sofa Bed Dekorasi Minimalis",
    cat: "Sofa",
    brand: "Geja Furniture",
    price: 2499000,
    material: "Busa Rebondid, Kain Midili, Kayu Jati Perhutani, Kayu Solid, PVC",
    color: "Coklat",
    size: "180 x 100 x 35 cm",
    shopee: "https://shopee.co.id/Geja-Sofa-Bed-Becca-Reclining-Minimalis-Modern-Sofa-Bed-Dekorasi-Minimalis-i.20077758.44767875479?extraParams=%7B%22display_model_id%22%3A411510724908%2C%22model_selection_logic%22%3A3%7D",
    images: [
      "images/sofa7_1.webp",
      "images/sofa7_2.webp",
      "images/sofa7_3.webp",
      "images/sofa7_4.webp",
      "images/sofa7_5.webp",
      "images/sofa7_6.webp",
      "images/sofa7_7.webp",
      "images/sofa7_8.webp",
      "images/sofa7_9.webp"
    ],
    desc: `Unik dan fungsional untuk apartemen kecil dan ruang tamu minimalis. Geja Sofa Bed Becca Reclining menghadirkan kenyamanan maksimal dengan 3 posisi reclining (duduk, rebah, tidur) yang smooth—ideal untuk nonton Netflix bareng keluarga atau tamu yang menginap dadakan.

    Fitur Utama
    - 3 Posisi Reclining: Duduk, Rebah, Tidur; transisi mulus berkat engsel reclining yang kokoh.
    - Dual Fungsi 2-in-1: Cepat berubah dari sofa santai ke tempat tidur tanpa ribet.
    - Material Berkualitas: Busa royal foam premium dengan kepadatan tinggi (high density foam) yang empuk namun menopang tubuh dengan baik, serta kain high durability yang lembut di kulit dengan sirkulasi udara baik.
    - Rangka Kokoh: Kaki 100% kayu jati perhutani (kayu solid) dengan finishing natural, terasa hangat dan kokoh.
    - Anti Slip: Dilengkapi anti slip untuk penggunaan lebih stabil.

    Desain & Peruntukan
    - Gaya Minimalis Modern/Japandi dengan sentuhan industrial; kaki kayu solid memberi nuansa hangat dan rapi di berbagai tema ruangan.
    - Cocok untuk apartemen, kosan, kamar tidur, ruang tamu kecil, ruang keluarga, dan tamu yang menginap dadakan.

    Ukuran & Kapasitas
    - Dimensi (P x L x T): 180 x 100 x 35 cm
    - Jumlah tempat duduk : 2

    Perawatan
    - Bersihkan debu/bulu menggunakan vacuum cleaner.
    - Segera lap dengan tisu/kain kering jika terkena noda; hindari menggosok terlalu keras agar serat kain tetap awet.
    - Buka cover bantal sandaran lalu jemur dan angin-anginkan.

    Garansi & Layanan
    - Garansi 12 bulan (garansi produsen): busa, kerangka, serta kena rayap diganti 100% baru.
    - Estimasi pre order 2–3 minggu; jika produksi lebih cepat akan diinformasikan via chat admin.

    Catatan Pembelian & Pengiriman
    - Wajib tanya stok atau variasi produk sebelum membeli.
    - Gratis ongkir ke wilayah Jawa untuk semua produk (*); pilih pengiriman menggunakan Kargo. Area gratis ongkir: DIY (Kota Yogyakarta, Bantul, Sleman, Gunung Kidul), Jateng (Klaten, Solo/Surakarta, Boyolali, Salatiga, Karanganyar, Wonogiri, Magelang, Semarang, Demak, Kudus, Wonosobo, Kebumen, Purworejo, Purwokerto, Banyumas, Banjarnegara), Jatim (Pacitan, Ngawi), dan se-Jawa.
    - Di luar area tersebut akan dikenakan subsidi ongkir; silakan hubungi admin via chat untuk info ongkir ke kotamu.
    - TRANSAKSI DI JAMIN AMAN. Mau datang langsung ke toko juga bisa—wajib chat sebelum membeli.`
  },
  {
    id: "GEJA-SOF-003",
    name: "Sofa Bed Hana",
    cat: "Sofa",
    brand: "Geja Furniture",
    price: 4650000,
    material: "Fabric",
    color: "Grey",
    size: "200 × 90 × 85 cm",
    shopee: "https://shopee.co.id/Geja-Furniture-i.123456789.123456800",
    images: [
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85"
    ],
    desc: "Sofa yang dapat diubah menjadi tempat beristirahat."
  },
  {
    id: "GEJA-AKS-001",
    name: "Floor Lamp Lio",
    cat: "Aksesoris",
    brand: "Geja Furniture",
    price: 895000,
    material: "Metal + fabric",
    color: "White",
    size: "45 × 45 × 150 cm",
    shopee: "https://shopee.co.id/Geja-Furniture-i.123456789.123456801",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"
    ],
    desc: "Lampu lantai dengan karakter ringan untuk sudut baca dan ruang santai."
  },
  {
    id: "GEJA-AKS-002",
    name: "Cushion Arlo",
    cat: "Aksesoris",
    brand: "Geja Furniture",
    price: 325000,
    material: "Cotton",
    color: "Blue Sand",
    size: "45 × 45 cm",
    shopee: "https://shopee.co.id/Geja-Furniture-i.123456789.123456802",
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85"
    ],
    desc: "Bantal dekoratif untuk menambah aksen warna yang lembut pada ruang."
  }
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const modalDescription = $("#modalDesc");
const modalDescriptionToggle = document.createElement("button");
modalDescriptionToggle.type = "button";
modalDescriptionToggle.className = "modal-description-toggle";
modalDescriptionToggle.setAttribute("aria-controls", "modalDesc");
modalDescriptionToggle.setAttribute("aria-expanded", "false");
modalDescriptionToggle.textContent = "Baca selengkapnya";
modalDescriptionToggle.hidden = true;
modalDescription.insertAdjacentElement("afterend", modalDescriptionToggle);
modalDescriptionToggle.addEventListener("click", () => {
  const expanded = modalDescriptionToggle.getAttribute("aria-expanded") === "true";
  modalDescription.classList.toggle("is-collapsed", expanded);
  modalDescription.classList.toggle("is-expanded", !expanded);
  modalDescriptionToggle.setAttribute("aria-expanded", String(!expanded));
  modalDescriptionToggle.textContent = expanded ? "Baca selengkapnya" : "Tampilkan lebih sedikit";
});
const rupiah = n => new Intl.NumberFormat("id-ID", {style:"currency", currency:CONFIG.currency, maximumFractionDigits:0}).format(n);
let currentCategory = "Semua";
let sortMode = "latest";
let brandFilter = "all";
let minPrice = 0;
let maxPrice = Infinity;
let modalProductId = null;
let modalImages = [];
let modalImageIndex = 0;
let viewerScale = 1;
let viewerOffsetX = 0;
let viewerOffsetY = 0;
let viewerPinchStartDistance = 0;
let viewerPinchStartScale = 1;
let viewerTouchStart = null;
let viewerLastTap = 0;

const grid = $("#productGrid");
const empty = $("#emptyState");

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]));
}

function getProductImages(product) {
  const images = Array.isArray(product.images) ? product.images : product.images ? [product.images] : [];
  return images.filter(Boolean).length ? images.filter(Boolean) : product.img ? [product.img] : [];
}

function setModalImage(index) {
  if (!modalImages.length) return;
  modalImageIndex = (index + modalImages.length) % modalImages.length;
  const image = $("#modalImg");
  image.src = modalImages[modalImageIndex];
  image.alt = `${$("#modalName").textContent} - Foto ${modalImageIndex + 1}`;

  const counter = $("#modalImageCount");
  if (counter) counter.textContent = `${modalImageIndex + 1} / ${modalImages.length}`;

  const dots = $("#modalImageDots");
  if (dots) {
    dots.innerHTML = modalImages.map((_, i) => `<button class="modal-image-dot${i === modalImageIndex ? " active" : ""}" type="button" aria-label="Foto ${i + 1}" aria-pressed="${i === modalImageIndex}" data-image-index="${i}"></button>`).join("");
    $$(".modal-image-dot", dots).forEach(button => {
      button.addEventListener("click", () => setModalImage(Number(button.dataset.imageIndex)));
    });
  }

  const hasMultipleImages = modalImages.length > 1;
  [$("#modalImagePrev"), $("#modalImageNext")].forEach(button => {
    if (button) button.hidden = !hasMultipleImages;
  });
  if (counter) counter.hidden = !hasMultipleImages;
  if (dots) dots.hidden = !hasMultipleImages;
  if ($("#productImageViewer").classList.contains("open")) openProductImageViewer();
}

function resetProductImageZoom() {
  viewerScale = 1;
  viewerOffsetX = 0;
  viewerOffsetY = 0;
  const image = $("#productImageViewerImg");
  image.style.transform = "none";
  $("#productImageViewerReset").hidden = true;
}

function updateProductImageZoom() {
  const viewer = $("#productImageViewer");
  const maxX = viewer.clientWidth * (viewerScale - 1) / 2;
  const maxY = viewer.clientHeight * (viewerScale - 1) / 2;
  viewerOffsetX = Math.max(-maxX, Math.min(maxX, viewerOffsetX));
  viewerOffsetY = Math.max(-maxY, Math.min(maxY, viewerOffsetY));
  $("#productImageViewerImg").style.transform = `translate(${viewerOffsetX}px, ${viewerOffsetY}px) scale(${viewerScale})`;
  $("#productImageViewerReset").hidden = viewerScale <= 1;
}

function openProductImageViewer() {
  const image = $("#productImageViewerImg");
  image.src = $("#modalImg").src;
  image.alt = $("#modalImg").alt;
  resetProductImageZoom();
  const viewer = $("#productImageViewer");
  viewer.classList.add("open");
  viewer.setAttribute("aria-hidden", "false");
  $("#productImageViewerClose").focus();
}

function closeProductImageViewer() {
  const viewer = $("#productImageViewer");
  viewer.classList.remove("open");
  viewer.setAttribute("aria-hidden", "true");
  resetProductImageZoom();
  $("#modalImg").focus();
}

function toggleProductImageZoom() {
  viewerScale = viewerScale > 1 ? 1 : 2;
  if (viewerScale === 1) {
    viewerOffsetX = 0;
    viewerOffsetY = 0;
  }
  updateProductImageZoom();
}

function productMatches(p, q) {
  if (!q) return true;
  const haystack = [p.id,p.name,p.cat,p.brand,p.desc,p.material,p.color,p.size].join(" ").toLowerCase();
  return haystack.includes(q);
}

function getFilteredProducts() {
  const q = headerSearch.value.trim().toLowerCase();
  const filtered = products.filter(p =>
    (currentCategory === "Semua" || p.cat === currentCategory) &&
    (brandFilter === "all" || p.brand === brandFilter) &&
    p.price >= minPrice && p.price <= maxPrice &&
    productMatches(p, q)
  );

  return filtered.sort((a,b) => {
    if (sortMode === "latest") {
      const aNumber = Number(a.id.match(/\d+$/)?.[0] || 0);
      const bNumber = Number(b.id.match(/\d+$/)?.[0] || 0);
      return bNumber - aNumber || b.id.localeCompare(a.id, "id");
    }
    if (sortMode === "price-low") return a.price - b.price;
    if (sortMode === "price-high") return b.price - a.price;
    if (sortMode === "name") return a.name.localeCompare(b.name, "id");
    return a.name.localeCompare(b.name, "id");
  });
}

function productCard(p) {
  const images = getProductImages(p);
  const image = escapeHtml(images[0] || "");
  const galleryIndicator = images.length > 1
    ? `<span class="product-image-gallery-icon" role="img" aria-label="${images.length} foto produk" title="${images.length} foto produk"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="4" width="12" height="13" rx="2"></rect><rect x="4" y="8" width="12" height="13" rx="2"></rect><path d="m6.5 17 3-3 2 2 1.5-1.5 3 3"></path></svg></span>`
    : "";
  return `<article class="product" tabindex="0" role="button" aria-label="Lihat detail ${escapeHtml(p.name)}" data-id="${escapeHtml(p.id)}">
    <div class="product-image">
      <img src="${image}" alt="${escapeHtml(p.name)}" loading="lazy" decoding="async" onerror="this.classList.add('img-error')">
      ${galleryIndicator}
      <button class="quick-view" type="button" data-quick-view="${escapeHtml(p.id)}">Detail</button>
    </div>
    <div class="product-info">
      <span class="product-category">${escapeHtml(p.cat)}</span>
      <h3>${escapeHtml(p.name)}</h3>
      <div class="product-meta"><span>${escapeHtml(p.material)}</span><span>${escapeHtml(p.color)}</span></div>
      <div class="price">${rupiah(p.price)}</div>
    </div>
  </article>`;
}

const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const scrollRevealObserver = !reduceMotion && "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      scrollRevealObserver.unobserve(entry.target);
    });
  }, {threshold:0.12, rootMargin:"0px 0px -40px 0px"})
  : null;

function observeScrollReveal(elements) {
  if (!scrollRevealObserver) return;
  elements.forEach(element => {
    element.classList.add("scroll-reveal");
    scrollRevealObserver.observe(element);
  });
}

function render() {
  const data = getFilteredProducts();
  grid.innerHTML = data.map(productCard).join("");
  observeScrollReveal($$(".product", grid));
  empty.hidden = data.length !== 0;
  $$(".product", grid).forEach(card => {
    card.addEventListener("click", e => {
      if (e.target.closest(".quick-view")) return;
      openModal(card.dataset.id);
    });
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(card.dataset.id); }
    });
  });
  $$('[data-quick-view]', grid).forEach(btn => btn.addEventListener("click", e => {
    e.stopPropagation(); openModal(btn.dataset.quickView);
  }));
}

function setFilter(value, shouldScroll=true) {
  currentCategory = value;
  $$(".filter").forEach(b => b.classList.toggle("active", b.dataset.filter === value));
  $$(".category-card").forEach(b => b.classList.toggle("active", b.dataset.filter === value));
  render();
  if (shouldScroll) $("#produk").scrollIntoView({behavior:"smooth", block:"start"});
}

function openModal(id, updateUrl=true) {
  const p = products.find(item => item.id === id);
  if (!p) return;
  modalProductId = p.id;
  modalImages = getProductImages(p);
  $("#modalCategory").textContent = `${p.cat} · ${p.brand}`;
  $("#modalName").textContent = p.name;
  setModalImage(0);
  $("#modalPrice").textContent = rupiah(p.price);
  modalDescription.textContent = p.desc;
  modalDescription.classList.add("is-collapsed");
  modalDescription.classList.remove("is-expanded");
  modalDescriptionToggle.hidden = true;
  modalDescriptionToggle.textContent = "Baca selengkapnya";
  modalDescriptionToggle.setAttribute("aria-expanded", "false");
  $("#modalSpec").innerHTML = `<div><b>Material</b><span>${escapeHtml(p.material)}</span></div><div><b>Warna</b><span>${escapeHtml(p.color)}</span></div><div><b>Ukuran</b><span>${escapeHtml(p.size)}</span></div>`;
  $("#modalShopee").href = shopeeUrl(p);
  $("#modalContact").href = whatsappUrl(p);
  $("#modalShare").onclick = () => shareProduct(p);
  $("#modal").classList.add("open");
  modalDescriptionToggle.hidden = modalDescription.scrollHeight <= modalDescription.clientHeight + 1;
  document.body.classList.add("modal-open");
  $("#modalClose").focus();
  if (updateUrl) history.replaceState(null,"",`${location.pathname}${location.search}#produk-${encodeURIComponent(p.id)}`);
}

function closeModal(updateUrl=true) {
  $("#modal").classList.remove("open");
  document.body.classList.remove("modal-open");
  modalProductId = null;
  modalImages = [];
  modalImageIndex = 0;
  if (updateUrl) history.replaceState(null,"",`${location.pathname}${location.search}`);
}

function shopeeUrl(p) {
  return p.shopee || `https://shopee.co.id/search?keyword=${encodeURIComponent(p.name)}`;
}

function productUrl(p) {
  return `${location.origin}${location.pathname}#produk-${encodeURIComponent(p.id)}`;
}

function whatsappUrl(p) {
  const message = `Halo Geja Furniture,\n\nSaya tertarik dengan produk:\n${p.name}\nKode: ${p.id}\nHarga: ${rupiah(p.price)}\n\nLihat foto dan detail produk:\n${productUrl(p)}\n\nMohon informasi mengenai stok, detail, dan pemesanannya. Terima kasih.`;
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

async function copyProductUrl(url) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
      return true;
    }
  } catch (_) {}

  const field = document.createElement("textarea");
  field.value = url;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.append(field);
  field.select();
  let copied = false;
  try { copied = document.execCommand("copy"); } catch (_) {}
  field.remove();
  return copied;
}

async function shareProduct(p) {
  const url = productUrl(p);
  const payload = {title:`${p.name} — Geja Furniture`, text:`${p.name} · ${rupiah(p.price)}`, url};
  if (navigator.share) {
    try {
      await navigator.share(payload);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  const btn = $("#modalShare");
  if (await copyProductUrl(url)) {
    const oldLabel = btn.getAttribute("aria-label");
    const oldTitle = btn.title;
    btn.setAttribute("aria-label", "Link produk tersalin");
    btn.title = "Link produk tersalin";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.setAttribute("aria-label", oldLabel);
      btn.title = oldTitle;
      btn.classList.remove("copied");
    }, 1800);
    return;
  }

  window.prompt("Salin tautan produk ini:", url);
}

$("#modalClose").addEventListener("click", () => closeModal());
$("#modal").addEventListener("click", e => { if (e.target === $("#modal")) closeModal(); });
$("#modalImagePrev")?.addEventListener("click", () => setModalImage(modalImageIndex - 1));
$("#modalImageNext")?.addEventListener("click", () => setModalImage(modalImageIndex + 1));
$("#modalImg").addEventListener("click", openProductImageViewer);
$("#productImageViewerClose").addEventListener("click", closeProductImageViewer);
$("#productImageViewerReset").addEventListener("click", resetProductImageZoom);
$("#productImageViewer").addEventListener("click", event => {
  if (event.target === $("#productImageViewer")) closeProductImageViewer();
});
const viewerImage = $("#productImageViewerImg");
viewerImage.addEventListener("dblclick", toggleProductImageZoom);
const touchDistance = touches => Math.hypot(touches[0].clientX - touches[1].clientX, touches[0].clientY - touches[1].clientY);
viewerImage.addEventListener("touchstart", event => {
  if (event.target.closest("button")) return;
  if (event.touches.length === 2) {
    viewerPinchStartDistance = touchDistance(event.touches);
    viewerPinchStartScale = viewerScale;
    viewerTouchStart = null;
  } else if (event.touches.length === 1) {
    viewerTouchStart = {x:event.touches[0].clientX, y:event.touches[0].clientY, offsetX:viewerOffsetX, offsetY:viewerOffsetY};
  }
}, {passive:true});
viewerImage.addEventListener("touchmove", event => {
  if (event.touches.length === 2 && viewerPinchStartDistance) {
    event.preventDefault();
    viewerScale = Math.max(1, Math.min(4, viewerPinchStartScale * touchDistance(event.touches) / viewerPinchStartDistance));
    updateProductImageZoom();
  } else if (event.touches.length === 1 && viewerTouchStart && viewerScale > 1) {
    event.preventDefault();
    viewerOffsetX = viewerTouchStart.offsetX + event.touches[0].clientX - viewerTouchStart.x;
    viewerOffsetY = viewerTouchStart.offsetY + event.touches[0].clientY - viewerTouchStart.y;
    updateProductImageZoom();
  }
}, {passive:false});
viewerImage.addEventListener("touchend", event => {
  if (event.touches.length < 2) viewerPinchStartDistance = 0;
  if (event.touches.length || !viewerTouchStart) return;
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - viewerTouchStart.x;
  const deltaY = touch.clientY - viewerTouchStart.y;
  const moved = Math.hypot(deltaX, deltaY) > 12;
  viewerTouchStart = null;
  if (moved && viewerScale === 1 && Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) && modalImages.length > 1) {
    setModalImage(modalImageIndex + (deltaX < 0 ? 1 : -1));
    return;
  }
  if (moved || viewerScale > 1) return;
  const now = Date.now();
  if (now - viewerLastTap < 320) {
    toggleProductImageZoom();
    viewerLastTap = 0;
  } else {
    viewerLastTap = now;
  }
}, {passive:true});
const modalGallery = $(".modal-gallery");
let galleryTouchStart = null;
modalGallery?.addEventListener("touchstart", event => {
  if (modalImages.length < 2 || event.touches.length !== 1 || event.target.closest("button")) return;
  galleryTouchStart = {x:event.touches[0].clientX, y:event.touches[0].clientY};
}, {passive:true});
modalGallery?.addEventListener("touchend", event => {
  if (!galleryTouchStart) return;
  const deltaX = event.changedTouches[0].clientX - galleryTouchStart.x;
  const deltaY = event.changedTouches[0].clientY - galleryTouchStart.y;
  galleryTouchStart = null;
  if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
  setModalImage(modalImageIndex + (deltaX < 0 ? 1 : -1));
}, {passive:true});
modalGallery?.addEventListener("touchcancel", () => { galleryTouchStart = null; }, {passive:true});
document.addEventListener("keydown", e => {
  if ($("#productImageViewer").classList.contains("open")) {
    if (e.key === "Escape") closeProductImageViewer();
    else if (e.key === "ArrowLeft") setModalImage(modalImageIndex - 1);
    else if (e.key === "ArrowRight") setModalImage(modalImageIndex + 1);
  } else if (e.key === "Escape" && $("#modal").classList.contains("open")) {
    closeModal();
  }
});

$$(".filter").forEach(b => b.addEventListener("click", () => setFilter(b.dataset.filter)));
$$(".category-card").forEach(b => b.addEventListener("click", () => setFilter(b.dataset.filter)));
$("#sort").addEventListener("change", e => { sortMode = e.target.value; render(); });
$("#priceRange").addEventListener("change", e => {
  const value = e.target.value;
  if (value === "all") { minPrice = 0; maxPrice = Infinity; }
  else if (value === "under2") { minPrice = 0; maxPrice = 1999999; }
  else if (value === "2to5") { minPrice = 2000000; maxPrice = 4999999; }
  else { minPrice = 5000000; maxPrice = Infinity; }
  render();
});

$("#brandFilter").addEventListener("change", e => {
  brandFilter = e.target.value;
  render();
});

$("#clearFilters").addEventListener("click", () => {
  currentCategory = "Semua"; sortMode = "latest"; brandFilter = "all"; minPrice = 0; maxPrice = Infinity; headerSearch.value = "";
  $("#sort").value = "latest"; $("#priceRange").value = "all"; $("#brandFilter").value = "all"; setFilter("Semua", false);
});

const menuBtn = $("#menuBtn");
const nav = $("#nav");
const navLinks = $$("#nav a");
function setActiveNav(activeLink) {
  navLinks.forEach(link => link.classList.toggle("nav-active", link === activeLink));
}
function syncActiveNav() {
  const currentUrl = new URL(location.href);
  const activeLink = navLinks.find(link => {
    const linkUrl = new URL(link.href, location.href);
    return linkUrl.pathname === currentUrl.pathname && (
      linkUrl.hash === currentUrl.hash ||
      (linkUrl.hash === "" && currentUrl.hash === "") ||
      (linkUrl.hash === "#produk" && currentUrl.hash.startsWith("#produk-"))
    );
  });
  if (activeLink) setActiveNav(activeLink);
}
syncActiveNav();
window.addEventListener("hashchange", syncActiveNav);
menuBtn.addEventListener("click", () => {
  const opened = nav.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", String(opened));
});
navLinks.forEach(a => a.addEventListener("click", () => {
  setActiveNav(a);
  nav.classList.remove("show");
  menuBtn.setAttribute("aria-expanded","false");
}));


// Header search: pencarian dari header membuka halaman katalog dengan kata kunci.
const headerSearch = $("#headerSearch");
const headerSearchForm = $("#headerSearchForm");

function goToCatalog(query) {
  const q = query.trim();
  if (!q) {
    window.location.href = "katalog.html";
    return;
  }
  const params = new URLSearchParams({q});
  window.location.href = `katalog.html?${params.toString()}`;
}

headerSearchForm.addEventListener("submit", e => {
  e.preventDefault();
  goToCatalog(headerSearch.value);
});

// Isi pencarian header dari URL dan tampilkan hasilnya pada halaman aktif.
const urlQuery = new URLSearchParams(location.search).get("q");
if (urlQuery) {
  headerSearch.value = urlQuery;
}

headerSearch.addEventListener("input", () => {
  render();
});

headerSearch.addEventListener("focus", () => {
  if (!location.pathname.endsWith("katalog.html")) {
    $("#produk").scrollIntoView({behavior:"smooth", block:"start"});
  }
});

// Slider kategori horizontal dengan tombol navigasi.
const categoryTrack = $("#categoryTrack");
$("#catPrev").addEventListener("click", () => categoryTrack.scrollBy({left:-320, behavior:"smooth"}));
$("#catNext").addEventListener("click", () => categoryTrack.scrollBy({left:320, behavior:"smooth"}));

// Hero carousel otomatis dengan kontrol manual dan pause saat pengguna berinteraksi.
const heroCarousel = $("#heroCarousel");
if (heroCarousel) {
  const heroSlides = $$(".hero-slide", heroCarousel);
  const heroDots = $$(".hero-dot", heroCarousel);
  const heroCardLabel = $(".hero-card-label", heroCarousel);
  const heroCardTitle = $(".hero-card-title", heroCarousel);
  const heroCardDescription = $(".hero-card-description", heroCarousel);
  let heroIndex = 0;
  let heroTimer;

  function showHeroSlide(index) {
    heroIndex = (index + heroSlides.length) % heroSlides.length;
    const activeSlide = heroSlides[heroIndex];
    heroSlides.forEach((slide, i) => slide.classList.toggle("active", i === heroIndex));
    heroCardLabel.textContent = activeSlide.dataset.cardLabel;
    heroCardTitle.textContent = activeSlide.dataset.cardTitle;
    heroCardDescription.textContent = activeSlide.dataset.cardDescription;
    heroDots.forEach((dot, i) => {
      const selected = i === heroIndex;
      dot.classList.toggle("active", selected);
      dot.setAttribute("aria-selected", String(selected));
    });
  }

  function startHeroAutoplay() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => showHeroSlide(heroIndex + 1), 4000);
  }

  heroDots.forEach((dot, i) => dot.addEventListener("click", () => {
    showHeroSlide(i);
    startHeroAutoplay();
  }));
  heroCarousel.addEventListener("mouseenter", () => clearInterval(heroTimer));
  heroCarousel.addEventListener("mouseleave", startHeroAutoplay);
  heroCarousel.addEventListener("focusin", () => clearInterval(heroTimer));
  heroCarousel.addEventListener("focusout", event => {
    if (!heroCarousel.contains(event.relatedTarget)) startHeroAutoplay();
  });
  startHeroAutoplay();
}

window.addEventListener("popstate", () => handleHash());
function handleHash() {
  const match = location.hash.match(/^#produk-(.+)$/);
  if (match) openModal(decodeURIComponent(match[1]), false);
}

// Tahun otomatis agar tidak cepat kedaluwarsa.
$("#year").textContent = new Date().getFullYear();

// Inisialisasi.
observeScrollReveal($$("main > section:not(.hero)"));
render();
handleHash();
