import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  imageContainer: {
    position: 'relative',
    textAlign: 'center',
    color: 'white'
  },
  heroImage: {
    width: '100vw',
    maxHeight: 800,
    display: 'block',
    height: 'auto'
  },
  heroText: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  sectionContainer: {
    textAlign: 'center',
    padding: 50
  },
  link: {
    textDecoration: 'none'
  }
}))
