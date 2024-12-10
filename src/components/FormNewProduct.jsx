import { Link, Form } from 'react-router-dom'

import Modal from './Modal'
import classes from '../assets/css/Modal.module.css'

export default function FormNewProduct() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text:</label>
          <textarea id="body" name="body" required rows={3}/>
        </p>
        <p>
          <label htmlFor="name">Your name:</label>
          <input type="text" id="name" name="author" required />
        </p>
        <div className={classes.actions}>
          <div className={classes.back}>
            <Link to='..'>
              Cancel
            </Link>
          </div>
          <button>Submit</button>
        </div>
      </Form>
    </Modal>
  )
}
