function customadvice(request, result){
  result.status(200).send(
    {
      id:"359dcaf1-d583-4259-b922-205ec45f9037",
      product_id:"5bbda893-efa4-48bc-a625-42c54a42f74d",
      content:"la pratique de la marche sportive intensive",
      pictures:"816/8164913/zoom_e53f99632c5c4bc49be3042f3a9b5a86.jpg",
      created_at: "NOW()",
      updated_at: "NOW()"
    }
  )
}

module.exports = customadvice;
