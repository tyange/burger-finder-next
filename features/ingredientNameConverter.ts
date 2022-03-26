export const kindConverter = (name: string) => {
  switch (name) {
    case "bread":
      return "빵";
    case "vegetable":
      return "채소";
    case "sauce":
      return "소스";
    case "patty":
      return "패티";
    case "extra":
      return "토핑";
    default:
      return "기타 재료들";
  }
};

export const nameConverter = (name: string) => {
  switch (name) {
    case "bun":
      return "일반적인 햄버거용 빵";
    case "lettuce":
      return "양상추";
    case "pickle":
      return "피클";
    case "onion":
      return "양파";
    case "tomato":
      return "토마토";
    case "spicy-sauce":
      return "매운 소스";
    case "bicmac-sauce":
      return "마요네즈와 케첩이 미묘하게 섞인 듯한 (빅맥스런)소스";
    case "teriyaki-sauce":
      return "간장맛을 기본으로 하는, 달콤 짭짤한 소스";
    case "ketchup-sauce":
      return "케첩맛이 강한 새콤(달콤)한 소스";
    case "mayo-sauce":
      return "마요네즈가 많이 들어가서 하얗고 눅진한 소스";
    case "chicken-patty":
      return "치킨 패티";
    case "hamburg-patty":
      return "돼지고기 + 소고기(햄버그) 패티";
    case "pork-patty":
      return "돼지고기 패티";
    case "beef-patty":
      return "소고기 패티";
    case "shrimp-patty":
      return "새우 패티";
    case "vegetable-patty":
      return "식물성(비건) 패티";
    case "hash-brown":
      return "해쉬브라운";
    case "cheese":
      return "치즈";
    default:
      return "알 수 없는 재료";
  }
};
