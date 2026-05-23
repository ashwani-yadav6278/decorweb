export function getCategory(text) {
  const name = text.toLowerCase();

  // CAR BOOT / CAR TRUNK
  if (
    name.includes("car boot") ||
    name.includes("car_boot") ||
    name.includes("car trunk") ||
    name.includes("car_trunk") ||
    name.includes("trunk") ||
    name.includes("boot") ||
    name.includes("gender reveal")
  ) {
    return "car-boot";
  }

  // BABY SHOWER
  if (
    name.includes("baby shower") ||
    name.includes("babyshower") ||
    name.includes("oh baby") ||
    name.includes("baby in bloom") ||
    name.includes("baby_shower") ||
    name.includes("gender reveal")
  ) {
    return "baby-shower";
  }

  // WELCOME BABY
  if (
    name.includes("welcome baby") ||
    name.includes("welcome little baby") ||
    name.includes("welcome little one") ||
    name.includes("new born baby") ||
    name.includes("newborn") ||
    name.includes("naming ceremony") ||
    name.includes("palna")
  ) {
    return "welcome-baby";
  }

  // ROMANTIC
  if (
    name.includes("romantic") ||
    name.includes("couple") ||
    name.includes("rose petals") ||
    name.includes("proposal") ||
    name.includes("marry me") ||
    name.includes("first night") ||
    name.includes("wedding room") ||
    name.includes("surprise room") ||
    name.includes("love surprise")
  ) {
    return "romantic";
  }

  // ANNIVERSARY
  if (
    name.includes("anniversary") ||
    name.includes("better together")
  ) {
    return "anniversary";
  }

  // HALDI
  if (
    name.includes("haldi") ||
    name.includes("mehndi") ||
    name.includes("lohri") ||
    name.includes("holi")
  ) {
    return "haldi";
  }

  // ENGAGEMENT
  if (
    name.includes("engagement") ||
    name.includes("bride to be") ||
    name.includes("soon to be mrs") ||
    name.includes("will you marry me")
  ) {
    return "engagement";
  }

  // JUNGLE THEME
  if (
    name.includes("jungle") ||
    name.includes("safari") ||
    name.includes("lion") ||
    name.includes("animal") ||
    name.includes("monkey")
  ) {
    return "jungle-theme";
  }

  // KIDS THEME
  if (
    name.includes("mickey") ||
    name.includes("minnie") ||
    name.includes("cocomelon") ||
    name.includes("pokemon") ||
    name.includes("spiderman") ||
    name.includes("minecraft") ||
    name.includes("doraemon") ||
    name.includes("unicorn") ||
    name.includes("princess") ||
    name.includes("fairy") ||
    name.includes("mermaid") ||
    name.includes("elsa") ||
    name.includes("frozen") ||
    name.includes("boss") ||
    name.includes("cricket") ||
    name.includes("space") ||
    name.includes("lego") ||
    name.includes("gymnastics") ||
    name.includes("butterfly") ||
    name.includes("donut") ||
    name.includes("car racing") ||
    name.includes("pool party") ||
    name.includes("rainbow") ||
    name.includes("moon star") ||
    name.includes("teddy") ||
    name.includes("krishna") ||
    name.includes("radha") ||
    name.includes("flamingo")
  ) {
    return "kids-theme";
  }

  // BIRTHDAY
  if (
    name.includes("birthday") ||
    name.includes("turns") ||
    name.includes("first year") ||
    name.includes("1st birthday") ||
    name.includes("second birthday") ||
    name.includes("third birthday") ||
    name.includes("fourth birthday") ||
    name.includes("fifth birthday")
  ) {
    return "birthday";
  }

  return "other";
}