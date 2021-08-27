import PropTypes from 'prop-types'
import Button from './Button'

//arrow function
const Header = ({title, onAdd,showAdd}) => {
    const onClick = () => {
        console.log('Click')
    }
    return(
        <header className='header'>
          <h1 > {title}</h1>
          <Button color= {showAdd ? 'red' : 'purple'} text={showAdd ? 'Close' : 'Add'} onClick = {onAdd}/>
        </header>
    )
}
Header.defaultProps = {
    title: 'To do list'
}

export default Header