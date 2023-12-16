export function addStyletoClass(selector: string, styleclass: string) {
    var element = document.getElementById(selector);
    element?.classList.add(styleclass);
}
  
export function removeStyleFromClass(selector: string, styleclass: string) {
  var element = document.getElementById(selector);
  element?.classList.remove(styleclass);
}
  
export function colorizeStreak(streak: number) {
  var element = document.getElementById("streakicon");
  if (streak <= 4) {
    const hasAttr = element?.hasAttribute("hot");
    hasAttr ? element?.classList.remove("hot"): "";
    element?.classList.add("cold");
  } else if (streak > 5 && streak <= 10) {
    const hasAttr = element?.hasAttribute("cold");
    hasAttr ? element?.classList.remove("cold"): "";
    element?.classList.add("mild"); 
  } else if (streak > 11 && streak <= 25) {
    const hasAttr = element?.hasAttribute("mild");
    hasAttr ? element?.classList.remove("mild"): "";
    element?.classList.add("warm");   
  } else if (streak > 26) {
    const hasAttr = element?.hasAttribute("warm");
    hasAttr ? element?.classList.remove("warm"): "";
    element?.classList.add("hot");
  }
}