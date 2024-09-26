export function navigateContent(props) {
    if(props === 'about'){
      window.scrollTo({top: 0, behaiver: 'smooth'})
    } else {
      const scrollY = props.getBoundingClientRect().top;
      window.scrollTo({
        top: scrollY,
        behaiver: 'smooth'
      })
    }
  }