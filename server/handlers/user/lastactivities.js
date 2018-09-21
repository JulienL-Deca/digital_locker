function lastactivities(request, result){
  const activitiesToReturn =
  [
    {
      id:"061c6b4c-0461-4cac-a53c-6bbf81a45999",
      name:"Course#1",
      sport:"running",
      user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
      start_date:"2018-06-15 15:37:11",
      end_date:"2018-06-15 15:57:11",
      duration:20,
      elevation:12,
      latitude:"50.62138748",
      longitude:"3.07932901",
      comment:"tres bonne séance",
      thumbnail:"https://linkdata-ressources-eu2.geonaute.com/preprod/a7b3f031d951ee7c529d/maps/60396d1b0824cd0ba33a.png",
      tag:"running",
      weather:"sunny",
      temperature:"21",
      humidity:"43",
      created_at: "NOW()",
      updated_at: "NOW()"
    },
    {
      id:"061c6b4c-0461-4cac-a53c-6bbf81a45888",
      name:"Course#2",
      sport:"running",
      user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
      start_date:"2018-06-17 15:37:11",
      end_date:"2018-06-17 15:57:11",
      duration:28,
      elevation:14,
      latitude:"50.62138748",
      longitude:"3.07932901",
      comment:"séance médiocre",
      thumbnail:"https://linkdata-ressources-eu2.geonaute.com/preprod/a7b3f031d951ee7c529d/maps/60396d1b0824cd0ba33a.png",
      tag:"running",
      weather:"cloudy",
      temperature:"21",
      humidity:"43",
      created_at: "NOW()",
      updated_at: "NOW()"
    },
    {
      id:"061c6b4c-0461-4cac-a53c-6bbf81aaa123",
      name:"Course#3",
      sport:"running",
      user_id:"061c6b4c-0461-4cac-a53c-6bbf81a45111",
      start_date:"2018-06-10 15:37:11",
      end_date:"2018-06-10 15:57:11",
      duration:45,
      elevation:20,
      latitude:"50.62138748",
      longitude:"3.07932901",
      comment:"séance médiocre",
      thumbnail:"https://linkdata-ressources-eu2.geonaute.com/preprod/a7b3f031d951ee7c529d/maps/60396d1b0824cd0ba33a.png",
      tag:"running",
      weather:"cloudy",
      temperature:"21",
      humidity:"43",
      created_at: "NOW()",
      updated_at: "NOW()"
    }
  ];
  result.status(200).send(activitiesToReturn);
}

module.exports = lastactivities;
