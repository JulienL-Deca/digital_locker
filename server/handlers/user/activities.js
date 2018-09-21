function activities(request, result){
  const activitiesToReturn =
  [
    {
      id:"061c6b4c-0461-4cac-a53c-6bbf81a45999",
      name:"Course#1",
      sport:"running",
      user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
      start_date:"2018-06-15 12:37:11",
      end_date:"2018-06-15 15:57:11",
      duration:43,
      distance:12,
      elevation:12,
      latitude:"50.62138748",
      longitude:"3.07932901",
      comment:"tres bonne séance",
      thumbnail:"/seeds/2.png",
      tag:"running",
      weather:"sunny",
      temperature:"21",
      humidity:"43",
      lost_calories:152,
      gear:"",
      gear_thumbnail:"",
      gear_lifetime_progress:"",
      gear_lifetime_max:800,
      gear_id: "",
      created_at: "NOW()",
      updated_at: "NOW()"
    },
    {
      id:"061c6b4c-0461-4cac-a53c-6bbf81a45888",
      name:"Course#2",
      sport:"running",
      user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
      start_date:"2018-06-17 13:07:12",
      end_date:"2018-06-17 15:57:11",
      duration:50,
      distance:15,
      elevation:14,
      latitude:"50.62138748",
      longitude:"3.07932901",
      comment:"séance médiocre",
      thumbnail:"/seeds/3.png",
      tag:"running",
      weather:"cloudy",
      temperature:"21",
      humidity:"43",
      lost_calories:162,
      gear:"Running active shoes white",
      gear_thumbnail:"https://www.decathlon.fr/media/837/8379990/zoom_b3fd02b9-2d9f-49a7-bc19-eacc77c21edb.jpg",
      gear_lifetime_progress:300,
      gear_lifetime_max:800,
      gear_id: "26c52ad0-1ebc-44f6-87d5-71cd908fa7e8",
      created_at: "NOW()",
      updated_at: "NOW()"
    },
    {
      id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
      name:"Course#3",
      sport:"running",
      user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
      start_date:"2018-06-22 15:37:11",
      end_date:"2018-06-22 15:57:11",
      duration:40,
      distance:11,
      elevation:14,
      latitude:"50.62138748",
      longitude:"3.07932901",
      comment:"bonne sortie",
      thumbnail:"/seeds/4.png",
      tag:"running",
      weather:"cloudy",
      temperature:"21",
      humidity:"43",
      lost_calories:172,
      gear:"Kiprun LD yellow black",
      gear_thumbnail:"https://www.decathlon.fr/media/837/8379739/zoom_dd74915f0c5e4aa4a07a641fb38eae98.jpg",
      gear_lifetime_progress:400,
      gear_lifetime_max:800,
      gear_id: "26c52ad0-1ebc-44f6-87d5-71cd908fa7e6",
      created_at: "NOW()",
      updated_at: "NOW()"
    },
    {
      id:"061c6b4c-0461-4cac-a53c-6bbf81a45222",
      name:"Course#4",
      sport:"running",
      user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
      start_date:"2018-06-27 16:42:11",
      end_date:"2018-06-27 17:57:11",
      duration:48,
      distance:13,
      elevation:14,
      latitude:"50.62138748",
      longitude:"3.07932901",
      comment:"cool",
      thumbnail:"/seeds/7.png",
      tag:"running",
      weather:"cloudy",
      temperature:"21",
      humidity:"43",
      lost_calories:158,
      gear:"Running shoes Eliofeet",
      gear_thumbnail:"https://www.decathlon.fr/media/835/8351743/zoom_7601b41658ac46c2a5a982039f00a70e.jpg",
      gear_lifetime_progress:500,
      gear_lifetime_max:800,
      gear_id: "26c52ad0-1ebc-44f6-87d5-71cd908fa7e1",
      created_at: "NOW()",
      updated_at: "NOW()"
    }
  ];
  result.status(200).send(activitiesToReturn);
}

function activitiesId(request, result){
  switch (request.params.id) {
    case "061c6b4c-0461-4cac-a53c-6bbf81a45999":
      result.status(200).send(
        {
          id:"061c6b4c-0461-4cac-a53c-6bbf81a45999",
          name:"Course#1",
          sport:"running",
          user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
          start_date:"2018-06-15 12:37:11",
          end_date:"2018-06-15 15:57:11",
          duration:43,
          distance:12,
          elevation:12,
          latitude:"50.62138748",
          longitude:"3.07932901",
          comment:"tres bonne séance",
          thumbnail:"/seeds/2.png",
          tag:"running",
          weather:"sunny",
          temperature:"21",
          humidity:"43",
          lost_calories:152,
          gear:"",
          gear_thumbnail:"",
          gear_lifetime_progress:"",
          gear_lifetime_max:800,
          gear_id: "",
          created_at: "NOW()",
          updated_at: "NOW()"
        }
      );
      break;
    case "061c6b4c-0461-4cac-a53c-6bbf81a45888":
      result.status(200).send(
        {
          id:"061c6b4c-0461-4cac-a53c-6bbf81a45888",
          name:"Course#2",
          sport:"running",
          user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
          start_date:"2018-06-17 13:07:12",
          end_date:"2018-06-17 15:57:11",
          duration:50,
          distance:15,
          elevation:14,
          latitude:"50.62138748",
          longitude:"3.07932901",
          comment:"séance médiocre",
          thumbnail:"/seeds/3.png",
          tag:"running",
          weather:"cloudy",
          temperature:"21",
          humidity:"43",
          lost_calories:162,
          gear:"Running active shoes white",
          gear_thumbnail:"https://www.decathlon.fr/media/837/8379990/zoom_b3fd02b9-2d9f-49a7-bc19-eacc77c21edb.jpg",
          gear_lifetime_progress:300,
          gear_lifetime_max:800,
          gear_id: "26c52ad0-1ebc-44f6-87d5-71cd908fa7e8",
          created_at: "NOW()",
          updated_at: "NOW()"
        }
      );
      break;
    case "061c6b4c-0461-4cac-a53c-6bbf81a45111":
      result.status(200).send(
        {
          id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
          name:"Course#3",
          sport:"running",
          user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
          start_date:"2018-06-22 15:37:11",
          end_date:"2018-06-22 15:57:11",
          duration:40,
          distance:11,
          elevation:14,
          latitude:"50.62138748",
          longitude:"3.07932901",
          comment:"bonne sortie",
          thumbnail:"/seeds/4.png",
          tag:"running",
          weather:"cloudy",
          temperature:"21",
          humidity:"43",
          lost_calories:172,
          gear:"Kiprun LD yellow black",
          gear_thumbnail:"https://www.decathlon.fr/media/837/8379739/zoom_dd74915f0c5e4aa4a07a641fb38eae98.jpg",
          gear_lifetime_progress:400,
          gear_lifetime_max:800,
          gear_id: "26c52ad0-1ebc-44f6-87d5-71cd908fa7e6",
          created_at: "NOW()",
          updated_at: "NOW()"
        }
      );
      break;
    case "061c6b4c-0461-4cac-a53c-6bbf81a45222":
      result.status(200).send(
        {
          id:"061c6b4c-0461-4cac-a53c-6bbf81a45222",
          name:"Course#4",
          sport:"running",
          user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
          start_date:"2018-06-27 16:42:11",
          end_date:"2018-06-27 15:57:11",
          duration:48,
          distance:13,
          elevation:14,
          latitude:"50.62138748",
          longitude:"3.07932901",
          comment:"cool",
          thumbnail:"/seeds/7.png",
          tag:"running",
          weather:"cloudy",
          temperature:"21",
          humidity:"43",
          lost_calories:158,
          gear:"Running shoes Eliofeet",
          gear_thumbnail:"https://www.decathlon.fr/media/835/8351743/zoom_7601b41658ac46c2a5a982039f00a70e.jpg",
          gear_lifetime_progress:500,
          gear_lifetime_max:800,
          gear_id: "26c52ad0-1ebc-44f6-87d5-71cd908fa7e1",
          created_at: "NOW()",
          updated_at: "NOW()"
        }
      )
    default:
      result.status(200).send("EMPTY ACTIVITIES  061c6b4c-0461-4cac-a53c-6bbf81a45999 061c6b4c-0461-4cac-a53c-6bbf81a45888 061c6b4c-0461-4cac-a53c-6bbf81a45222 061c6b4c-0461-4cac-a53c-6bbf81a45111");
  }
}

module.exports = {
  activities: activities,
  activitiesId: activitiesId
}
