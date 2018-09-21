function feedbacksstats(request, result){
  const feedbacksstats =
  [
    {
      id:"5bbda893-efa4-48bc-a625-42c54a42f74d",
      decathlon_id:"8164913",
      title:"Chaussures Homme Nakuru Confort cuir",
      image_path:"816/8164913/zoom_e53f99632c5c4bc49be3042f3a9b5a86.jpg",
      decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
      lifetime_max:800,
      product_owner_message:"la pratique de la marche sportive intensive.",
      created_at: "NOW()",
      updated_at: "NOW()"
    }
  ];
  result.status(200).send(feedbacksstats);
}

module.exports = feedbacksstats;
