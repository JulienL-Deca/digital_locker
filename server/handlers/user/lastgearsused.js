const db = require("./../../../models/index");


function lastgearsused(request, result){
  const lastgearsused =
  [
    {
      id:"26c52ad0-1ebc-44f6-87d5-71cd908fa7e8",
      product_id:"a3b1ad6a-5063-44dc-aefe-e66e474e4a2d",
      title:"Running active shoes white",
      image_path:"https://www.decathlon.fr/media/837/8379990/zoom_b3fd02b9-2d9f-49a7-bc19-eacc77c21edb.jpg",
      lifetime_progress:300,
      lifetime_max:800,
      purchase_date:"NOW()",
      usable:"yes",
      session_nb:23,
      duration:"23:52'59''",
      user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
      created_at: "NOW()",
      updated_at: "NOW()"
    },
    {
      id:"26c52ad0-1ebc-44f6-87d5-71cd908fa7e6",
      product_id:"edf0f1a5-a009-4076-b5e0-9ae3c779e11b",
      title:"Kiprun LD yellow black",
      image_path:"https://www.decathlon.fr/media/837/8379739/zoom_dd74915f0c5e4aa4a07a641fb38eae98.jpg",
      lifetime_progress:400,
      lifetime_max:800,
      purchase_date:"NOW()",
      usable:"yes",
      session_nb:32,
      duration:"32:23'34''",
      user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45000",
      created_at: "NOW()",
      updated_at: "NOW()"
    },
    {
      id:"26c52ad0-1ebc-44f6-87d5-71cd908fa7e1",
      product_id:"d5c9a783-fa24-4d17-b0fb-dd2b88894cd4",
      title:"Running shoes Eliofeet",
      image_path:"https://www.decathlon.fr/media/835/8351743/zoom_7601b41658ac46c2a5a982039f00a70e.jpg",
      lifetime_progress:500,
      lifetime_max:800,
      purchase_date:"NOW()",
      usable:"yes",
      session_nb:32,
      duration:"42:23'34''",
      user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45999",
      created_at: "NOW()",
      updated_at: "NOW()"
    },
  ];
  result.status(200).send(lastgearsused);
}

  module.exports = lastgearsused;
