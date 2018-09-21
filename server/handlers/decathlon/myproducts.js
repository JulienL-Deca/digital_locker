function myproducts(request, result){
  const myproducts =
  [
    {
      id:"edf0f1a5-a009-4076-b5e0-9ae3c779e11b",
      decathlon_id:"8379739",
      title:"KIPRUN LD",
      image_path:"https://www.decathlon.fr/media/837/8379739/zoom_dd74915f0c5e4aa4a07a641fb38eae98.jpg",
      decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
      lifetime_max:800,
      product_owner_message:"le coureur s'entraînant sur route, 3 à 6 fois par semaine à des allures allant de 10 à 12km/h.",
      created_at: "NOW()",
      updated_at: "NOW()"
    },
    {
      id:"a3b1ad6a-5063-44dc-aefe-e66e474e4a2d",
      decathlon_id:"8379990",
      title:"CHAUSSURE RUN ACTIVE",
      image_path:"https://www.decathlon.fr/media/837/8379990/zoom_b3fd02b9-2d9f-49a7-bc19-eacc77c21edb.jpg",
      decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
      lifetime_max:800,
      product_owner_message:"les hommes souhaitant courir jusqu'à une heure, une à deux fois par semaine sur route ou tapis.",
      created_at: "NOW()",
      updated_at: "NOW()"
    },
    {
      id:"10fba447-433e-4304-b68b-1e2233d6f433",
      decathlon_id:"8351471",
      title:"KIPRUN SD FEMME",
      image_path:"https://www.decathlon.fr/media/835/8351471/zoom_7676913a73e04010ba0d868450f23e17.jpg",
      decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
      lifetime_max:800,
      product_owner_message:"la coureuse sur route voulant travailler sa vitesse lors de ses entraînements ou de ses compétitions.",
      created_at: "NOW()",
      updated_at: "NOW()"
    },
    {
      id:"d5c9a783-fa24-4d17-b0fb-dd2b88894cd4",
      decathlon_id:"8351743",
      title:"CHAUSSURE RUN ELIOFEET",
      image_path:"https://www.decathlon.fr/media/835/8351743/zoom_7601b41658ac46c2a5a982039f00a70e.jpg",
      decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
      lifetime_max:800,
      product_owner_message:"les hommes souhaitant courir jusqu'à 60 minutes, une à deux fois par semaine, sur route ou tapis.",
      created_at: "NOW()",
      updated_at: "NOW()"
    },
    {
      id:"d053fc69-0d48-47da-8244-6a69f08fce27",
      decathlon_id:"8351519",
      title:"VTT ROCKRIDER 340 NOIR/JAUNE",
      image_path:"https://www.decathlon.fr/media/835/8351519/zoom_0aee7aa92ca54ae7a498b0d99678ae97.jpg",
      decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
      lifetime_max:4500,
      product_owner_message:"le VTT de randonnée sportive occasionnelle.",
      created_at: "NOW()",
      updated_at: "NOW()"
    },
    {
      id:"738bab54-a421-42eb-9cc1-085384e21892",
      decathlon_id:"8327645",
      title:"VTT 24 ROCKRIDER 700 NOIR",
      image_path:"https://www.decathlon.fr/media/832/8327645/zoom_98e74177103042829543a684e533fc0f.jpg",
      decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
      lifetime_max:2800,
      product_owner_message:"la pratique du VTT pour les enfants à partir de 8 ans (de 1m35 à 1m55).",
      created_at: "NOW()",
      updated_at: "NOW()"
    },
    {
      id:"341557c1-1c3a-4221-8a6f-a5cf5b892d99",
      decathlon_id:"8322501",
      title:"VTT ROCKRIDER 520 S",
      image_path:"https://www.decathlon.fr/media/832/8322501/zoom_be05e129253749569c57ef620f626532.jpg",
      decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
      lifetime_max:5800,
      product_owner_message:"le VTT de randonnée sportive.",
      created_at: "NOW()",
      updated_at: "NOW()"
    }
  ];
  result.status(200).send(myproducts);
}

function myproductsId(request, result){
  switch (request.params.id) {
    case "edf0f1a5-a009-4076-b5e0-9ae3c779e11b":
      result.status(200).send(
        {
          id:"edf0f1a5-a009-4076-b5e0-9ae3c779e11b",
          decathlon_id:"8379739",
          title:"KIPRUN LD",
          image_path:"https://www.decathlon.fr/media/837/8379739/zoom_dd74915f0c5e4aa4a07a641fb38eae98.jpg",
          decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
          lifetime_max:800,
          product_owner_message:"le coureur s'entraînant sur route, 3 à 6 fois par semaine à des allures allant de 10 à 12km/h.",
          created_at: "NOW()",
          updated_at: "NOW()"
        }
      );
      break;
      case "a3b1ad6a-5063-44dc-aefe-e66e474e4a2d":
        result.status(200).send(
          {
            id:"a3b1ad6a-5063-44dc-aefe-e66e474e4a2d",
            decathlon_id:"8379990",
            title:"CHAUSSURE RUN ACTIVE",
            image_path:"https://www.decathlon.fr/media/837/8379990/zoom_b3fd02b9-2d9f-49a7-bc19-eacc77c21edb.jpg",
            decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
            lifetime_max:800,
            product_owner_message:"les hommes souhaitant courir jusqu'à une heure, une à deux fois par semaine sur route ou tapis.",
            created_at: "NOW()",
            updated_at: "NOW()"
          }
        );
        break;
      case "10fba447-433e-4304-b68b-1e2233d6f433":
        result.status(200).send(
          {
            id:"10fba447-433e-4304-b68b-1e2233d6f433",
            decathlon_id:"8351471",
            title:"KIPRUN SD FEMME",
            image_path:"https://www.decathlon.fr/media/835/8351471/zoom_7676913a73e04010ba0d868450f23e17.jpg",
            decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
            lifetime_max:800,
            product_owner_message:"la coureuse sur route voulant travailler sa vitesse lors de ses entraînements ou de ses compétitions.",
            created_at: "NOW()",
            updated_at: "NOW()"
          }
        )
        break;
      case "d5c9a783-fa24-4d17-b0fb-dd2b88894cd4":
        result.status(200).send(
          {
            id:"d5c9a783-fa24-4d17-b0fb-dd2b88894cd4",
            decathlon_id:"8351743",
            title:"CHAUSSURE RUN ELIOFEET",
            image_path:"https://www.decathlon.fr/media/835/8351743/zoom_7601b41658ac46c2a5a982039f00a70e.jpg",
            decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
            lifetime_max:800,
            product_owner_message:"les hommes souhaitant courir jusqu'à 60 minutes, une à deux fois par semaine, sur route ou tapis.",
            created_at: "NOW()",
            updated_at: "NOW()"
          }
        );
        break;
          case "d053fc69-0d48-47da-8244-6a69f08fce27":
          result.status(200).send(
            {
              id:"d053fc69-0d48-47da-8244-6a69f08fce27",
              decathlon_id:"8351519",
              title:"VTT ROCKRIDER 340 NOIR/JAUNE",
              image_path:"https://www.decathlon.fr/media/835/8351519/zoom_0aee7aa92ca54ae7a498b0d99678ae97.jpg",
              decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
              lifetime_max:4500,
              product_owner_message:"le VTT de randonnée sportive occasionnelle.",
              created_at: "NOW()",
              updated_at: "NOW()"
            }
          );
          break;
        case "738bab54-a421-42eb-9cc1-085384e21892":
          result.status(200).send(
            {
              id:"738bab54-a421-42eb-9cc1-085384e21892",
              decathlon_id:"8327645",
              title:"VTT 24 ROCKRIDER 700 NOIR",
              image_path:"https://www.decathlon.fr/media/832/8327645/zoom_98e74177103042829543a684e533fc0f.jpg",
              decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
              lifetime_max:2800,
              product_owner_message:"la pratique du VTT pour les enfants à partir de 8 ans (de 1m35 à 1m55).",
              created_at: "NOW()",
              updated_at: "NOW()"
            }
          );
          break;
        case "341557c1-1c3a-4221-8a6f-a5cf5b892d99":
          result.status(200).send(
            {
              id:"341557c1-1c3a-4221-8a6f-a5cf5b892d99",
              decathlon_id:"8322501",
              title:"VTT ROCKRIDER 520 S",
              image_path:"https://www.decathlon.fr/media/832/8322501/zoom_be05e129253749569c57ef620f626532.jpg",
              decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
              lifetime_max:5800,
              product_owner_message:"le VTT de randonnée sportive.",
              created_at: "NOW()",
              updated_at: "NOW()"
            }
          );
          break;
    default:
      result.status(200).send("BAD ID edf0f1a5-a009-4076-b5e0-9ae3c779e11b a3b1ad6a-5063-44dc-aefe-e66e474e4a2d 10fba447-433e-4304-b68b-1e2233d6f433 d5c9a783-fa24-4d17-b0fb-dd2b88894cd4 d053fc69-0d48-47da-8244-6a69f08fce27 738bab54-a421-42eb-9cc1-085384e21892 341557c1-1c3a-4221-8a6f-a5cf5b892d99");
  }
}

function myproductsIdStats(request, result){
  switch (request.params.id) {
    case "edf0f1a5-a009-4076-b5e0-9ae3c779e11b":
      result.status(200).send(
        {
          id:"edf0f1a5-a009-4076-b5e0-9ae3c779e11b",
          decathlon_id:"8379739",
          title:"KIPRUN LD",
          image_path:"https://www.decathlon.fr/media/837/8379739/zoom_dd74915f0c5e4aa4a07a641fb38eae98.jpg",
          decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
          lifetime_max:800,
          product_owner_message:"le coureur s'entraînant sur route, 3 à 6 fois par semaine à des allures allant de 10 à 12km/h.",
          nb_users: 4254,
          percent_male: "91",
          percent_female: "9",
          dur_max: "4:02'12''",
          dur_avr: "39'29''",
          dur_min: "21'07''",
          age_18_25: "8",
          age_26_45: "30",
          age_46_55: "36",
          age_56: "26",
          dist_max: "42,195",
          dist_avr: "12",
          dist_min: "4,5",
          weight_50: "10",
          weight_51_70: "47",
          weight_71_90: "28",
          weight_91: "15"
        }
      );
      break;
    case "a3b1ad6a-5063-44dc-aefe-e66e474e4a2d":
      result.status(200).send(
        {
          id:"a3b1ad6a-5063-44dc-aefe-e66e474e4a2d",
          decathlon_id:"8379990",
          title:"CHAUSSURE RUN ACTIVE",
          image_path:"https://www.decathlon.fr/media/837/8379990/zoom_b3fd02b9-2d9f-49a7-bc19-eacc77c21edb.jpg",
          decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
          lifetime_max:800,
          product_owner_message:"les hommes souhaitant courir jusqu'à une heure, une à deux fois par semaine sur route ou tapis.",
          nb_users: 1260,
          percent_male: "84",
          percent_female: "16",
          dur_max: "32'22''",
          dur_avr: "18'29''",
          dur_min: "10'07''",
          age_18_25: "34",
          age_26_45: "24",
          age_46_55: "26",
          age_56: "16",
          dist_max: "21",
          dist_avr: "10",
          dist_min: "3",
          weight_50: "12",
          weight_51_70: "45",
          weight_71_90: "28",
          weight_91: "15"
        }
      );
      break;
    case "10fba447-433e-4304-b68b-1e2233d6f433":
      result.status(200).send(
        {
          id:"10fba447-433e-4304-b68b-1e2233d6f433",
          decathlon_id:"8351471",
          title:"KIPRUN SD FEMME",
          image_path:"https://www.decathlon.fr/media/835/8351471/zoom_7676913a73e04010ba0d868450f23e17.jpg",
          decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
          lifetime_max:800,
          product_owner_message:"la coureuse sur route voulant travailler sa vitesse lors de ses entraînements ou de ses compétitions.",
          nb_users: 4120,
          percent_male: "1",
          percent_female: "99",
          dur_max: "32'22''",
          dur_avr: "15'29''",
          dur_min: "10'07''",
          age_18_25: "14",
          age_26_45: "44",
          age_46_55: "26",
          age_56: "16",
          dist_max: "10",
          dist_avr: "6",
          dist_min: "3,5",
          weight_50: "15",
          weight_51_70: "70",
          weight_71_90: "14",
          weight_91: "1"
        }
      )
      break;
    case "d5c9a783-fa24-4d17-b0fb-dd2b88894cd4":
      result.status(200).send(
        {
          id:"d5c9a783-fa24-4d17-b0fb-dd2b88894cd4",
          decathlon_id:"8351743",
          title:"CHAUSSURE RUN ELIOFEET",
          image_path:"https://www.decathlon.fr/media/835/8351743/zoom_7601b41658ac46c2a5a982039f00a70e.jpg",
          decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
          lifetime_max:800,
          product_owner_message:"les hommes souhaitant courir jusqu'à 60 minutes, une à deux fois par semaine, sur route ou tapis.",
          nb_users: 3521,
          percent_male: "95",
          percent_female: "5",
          dur_max: "1:12'22''",
          dur_avr: "39'29''",
          dur_min: "20'07''",
          age_18_25: "14",
          age_26_45: "24",
          age_46_55: "46",
          age_56: "16",
          dist_max: "21",
          dist_avr: "14",
          dist_min: "2,5",
          weight_50: "15",
          weight_51_70: "45",
          weight_71_90: "25",
          weight_91: "15"
        }
      );
      break;
    case "d053fc69-0d48-47da-8244-6a69f08fce27":
      result.status(200).send(
        {
          id:"d053fc69-0d48-47da-8244-6a69f08fce27",
          decathlon_id:"8351519",
          title:"VTT ROCKRIDER 340 NOIR/JAUNE",
          image_path:"https://www.decathlon.fr/media/835/8351519/zoom_0aee7aa92ca54ae7a498b0d99678ae97.jpg",
          decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
          lifetime_max:4500,
          product_owner_message:"le VTT de randonnée sportive occasionnelle.",
          nb_users: 22341,
          percent_male: "64",
          percent_female: "36",
          dur_max: "55'22''",
          dur_avr: "35'29''",
          dur_min: "20'07''",
          age_18_25: "34",
          age_26_45: "34",
          age_46_55: "16",
          age_56: "16",
          dist_max: "41",
          dist_avr: "14",
          dist_min: "2,5",
          weight_50: "15",
          weight_51_70: "45",
          weight_71_90: "25",
          weight_91: "15"
        }
      );
      break;
    case "738bab54-a421-42eb-9cc1-085384e21892":
      result.status(200).send(
        {
          id:"738bab54-a421-42eb-9cc1-085384e21892",
          decathlon_id:"8327645",
          title:"VTT 24 ROCKRIDER 700 NOIR",
          image_path:"https://www.decathlon.fr/media/832/8327645/zoom_98e74177103042829543a684e533fc0f.jpg",
          decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
          lifetime_max:2800,
          product_owner_message:"la pratique du VTT pour les enfants à partir de 8 ans (de 1m35 à 1m55).",
          nb_users: 3254,
          percent_male: "67",
          percent_female: "33",
          dur_max: "35'22''",
          dur_avr: "15'29''",
          dur_min: "14'07''",
          age_18_25: "85",
          age_26_45: "5",
          age_46_55: "7",
          age_56: "3",
          dist_max: "41",
          dist_avr: "14",
          dist_min: "2,5",
          weight_50: "15",
          weight_51_70: "45",
          weight_71_90: "25",
          weight_91: "15"
        }
      );
      break;
    case "341557c1-1c3a-4221-8a6f-a5cf5b892d99":
      result.status(200).send(
        {
          id:"341557c1-1c3a-4221-8a6f-a5cf5b892d99",
          decathlon_id:"8322501",
          title:"VTT ROCKRIDER 520 S",
          image_path:"https://www.decathlon.fr/media/832/8322501/zoom_be05e129253749569c57ef620f626532.jpg",
          decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
          lifetime_max:5800,
          product_owner_message:"le VTT de randonnée sportive.",
          nb_users: 3254,
          percent_male: "35",
          percent_female: "65",
          dur_max: "55'22''",
          dur_avr: "29'29''",
          dur_min: "11'07''",
          age_18_25: "14",
          age_26_45: "44",
          age_46_55: "26",
          age_56: "16",
          dist_max: "41",
          dist_avr: "14",
          dist_min: "2,5",
          weight_50: "15",
          weight_51_70: "50",
          weight_71_90: "25",
          weight_91: "1"
        }
      );
      break;
    default:
      result.status(200).send("BAD ID edf0f1a5-a009-4076-b5e0-9ae3c779e11b a3b1ad6a-5063-44dc-aefe-e66e474e4a2d 10fba447-433e-4304-b68b-1e2233d6f433 d5c9a783-fa24-4d17-b0fb-dd2b88894cd4 d053fc69-0d48-47da-8244-6a69f08fce27 738bab54-a421-42eb-9cc1-085384e21892 341557c1-1c3a-4221-8a6f-a5cf5b892d99");
  }
}

/*
nb_users: 3254,
percent_male: "74",
percent_female: "26",
dur_max: "55'22''",
dur_avr: "29'29''",
dur_min: "11'07''",
age_18_25: "14",
age_26_45: "44",
age_46_55: "26",
age_56: "16",
dist_max: "41",
dist_avr: "14",
dist_min: "2,5",
weight_50: "15",
weight_51_70: "45",
weight_71_90: "25",
weight_91: "15"
*/

function myproductsIdMyfeedbacks(request, result){
  switch (request.params.id) {
    case "5bbda893-efa4-48bc-a625-42c54a42f74d":
      result.status(200).send(
        {
          id:"5bbda893-efa4-48bc-a625-42c54a42f74d",
          decathlon_id:"8164913",
          title:"Chaussures Homme Nakuru Confort cuir",
          image_path:"https://www.decathlon.fr/media/816/8164913/zoom_e53f99632c5c4bc49be3042f3a9b5a86.jpg",
          decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
          lifetime_max:800,
          product_owner_message:"la pratique de la marche sportive intensive.",
          created_at: "NOW()",
          updated_at: "NOW()"
        }
      );
      break;
    default:
      result.status(200).send("BAD ID 5bbda893-efa4-48bc-a625-42c54a42f74d");
  }
}
module.exports = {
  myproducts: myproducts,
  myproductsId: myproductsId,
  myproductsIdStats: myproductsIdStats,
  myproductsIdMyfeedbacks: myproductsIdMyfeedbacks
}
