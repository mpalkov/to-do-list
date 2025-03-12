const icons = {
  checked: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.39199 1.6666H13.617C16.442 1.6666 18.3337 3.64993 18.3337 6.59993V13.4091C18.3337 16.3499 16.442 18.3333 13.617 18.3333H6.39199C3.56699 18.3333 1.66699 16.3499 1.66699 13.4091V6.59993C1.66699 3.64993 3.56699 1.6666 6.39199 1.6666ZM9.52533 12.4916L13.4837 8.53326C13.767 8.24993 13.767 7.7916 13.4837 7.49993C13.2003 7.2166 12.7337 7.2166 12.4503 7.49993L9.00866 10.9416L7.55033 9.48326C7.26699 9.19993 6.80033 9.19993 6.51699 9.48326C6.23366 9.7666 6.23366 10.2249 6.51699 10.5166L8.50033 12.4916C8.64199 12.6333 8.82533 12.6999 9.00866 12.6999C9.20033 12.6999 9.38366 12.6333 9.52533 12.4916Z" fill="#2F69FE"/>
  </svg>,
  unchecked: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.39199 1.6666H13.617C16.442 1.6666 18.3337 3.64993 18.3337 6.59993V13.4091C18.3337 16.3499 16.442 18.3333 13.617 18.3333H6.39199C3.56699 18.3333 1.66699 16.3499 1.66699 13.4091V6.59993C1.66699 3.64993 3.56699 1.6666 6.39199 1.6666ZM9.52533 12.4916L13.4837 8.53326C13.767 8.24993 13.767 7.7916 13.4837 7.49993C13.2003 7.2166 12.7337 7.2166 12.4503 7.49993L9.00866 10.9416L7.55033 9.48326C7.26699 9.19993 6.80033 9.19993 6.51699 9.48326C6.23366 9.7666 6.23366 10.2249 6.51699 10.5166L8.50033 12.4916C8.64199 12.6333 8.82533 12.6999 9.00866 12.6999C9.20033 12.6999 9.38366 12.6333 9.52533 12.4916Z" fill="#1F57E7"/>
  </svg>,
  trashBin: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
  <g fill="#e72e2e" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(4,4)"><path d="M28,7c-2.757,0 -5,2.243 -5,5v3h-10c-1.104,0 -2,0.896 -2,2c0,1.104 0.896,2 2,2h2.10938l1.68359,30.33203c0.178,3.178 2.80723,5.66797 5.99023,5.66797h18.43359c3.182,0 5.81223,-2.48997 5.99023,-5.66797l1.68359,-30.33203h2.10938c1.104,0 2,-0.896 2,-2c0,-1.104 -0.896,-2 -2,-2h-10v-3c0,-2.757 -2.243,-5 -5,-5zM28,11h8c0.552,0 1,0.449 1,1v3h-10v-3c0,-0.551 0.448,-1 1,-1zM19.11328,19h25.77344l-1.67383,30.10938c-0.059,1.06 -0.93509,1.89063 -1.99609,1.89063h-18.43359c-1.06,0 -1.93709,-0.82967 -1.99609,-1.88867zM32,23.25c-0.967,0 -1.75,0.784 -1.75,1.75v20c0,0.966 0.783,1.75 1.75,1.75c0.967,0 1.75,-0.784 1.75,-1.75v-20c0,-0.966 -0.783,-1.75 -1.75,-1.75zM24.64258,23.25195c-0.965,0.034 -1.7205,0.84259 -1.6875,1.80859l0.69727,20.08594c0.033,0.945 0.81005,1.68945 1.74805,1.68945c0.021,0 0.0415,0 0.0625,0c0.965,-0.034 1.7205,-0.84455 1.6875,-1.81055l-0.69727,-20.08594c-0.034,-0.965 -0.84655,-1.7105 -1.81055,-1.6875zM39.35547,23.25195c-0.967,-0.027 -1.77459,0.7225 -1.80859,1.6875l-0.69727,20.08594c-0.034,0.966 0.7215,1.77655 1.6875,1.81055c0.021,0.001 0.0415,0 0.0625,0c0.938,0 1.71505,-0.74445 1.74805,-1.68945l0.69727,-20.08594c0.034,-0.966 -0.72345,-1.77459 -1.68945,-1.80859z"></path></g></g>
  </svg>  
}

export type iconName = 'checked' | 'unchecked' | 'trashBin';

/**
 * Inserts SVG icon as inline SVG code, so it can be targeted by CSS to change fill color.
 * @param {string ('checked' | 'unchecked' | 'trashBin')} {iconName} 
 * @returns React object
*/
const SvgIcon = ({iconName}: {iconName: iconName}) => {
  return (icons[iconName]);
}

export default SvgIcon;