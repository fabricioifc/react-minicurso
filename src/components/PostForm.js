import React from 'react';

export default class PostForm extends React.Component {

  handleSubmit = evento => {
    evento.preventDefault();
    const titleValue = this.title.value;
    const messageValue = this.message.value;

    const post = {title: titleValue, message: messageValue}
    this.props.salvar(post);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          ref={input => (this.title = input)}
          placeholder="Título"
          required
          autoFocus
        />
        <br />
        <textarea
          rows="5"
          name="message"
          ref={input => (this.message = input)}
          placeholder="Mensagem"
        />
        <br />
        <button type="submit">
          Postar
        </button>
      </form>
    )
  }
}