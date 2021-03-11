import Head from 'next/head'
import styles from '../styles/Select.module.css'
import React from 'react';
import ReactDOM from 'react-dom';
// import db from json
const data = require('../db.json');
import sendList from '../public/send_list.js'

function SendButton(props) {
  return (
    <input type="image" value="Submit" className={styles.send_button} src="send-24px.svg"/>
  )
}

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({list: [...this.state.list, (value+ ' ' +name)]});
  }

  handleSubmit(event) {
    event.preventDefault();
    let msg = this.state.list.join('\n');
    alert('A name was submitted: ' + msg);
    window.location = "https://api.whatsapp.com/send?text=" + encodeURI(msg) + "&lang=pt_br"
 
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        {[...new Set(this.props.prodList.map(item => 
          item.category))].sort().map(cat =>
          <div key={cat}>
            <h3>{cat}</h3>
            <table><tbody>
              { this.props.prodList.filter(item => item.category == cat)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(item => 
                  <tr key={item.name}>
                    <td>
                      <input 
                        name={item.unity + ' ' + item.name} 
                        type="number" 
                        value={this.state.value} 
                        onChange={this.handleChange}/>
                    </td>
                    <td>{ item.unity }</td>
                    <td>{ item.name }</td>
                  </tr>
              )}
           </tbody></table>
          </div>
          )
        }
        <div className={styles.bottom_bar}>
          <div>Enviar via Whatsapp</div>
        <SendButton/>
        </div>
        <input type="image" className={styles.send_button} src="send-24px.svg"
           value="Submit" />
      </form>
    )
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Super Lista Compras</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="static/niceicon.jpg" rel="icon" sizes="128x128"/>
      </Head>
      <main className={styles.main}>

        <div className={styles.top_bar}>
          Digite a quantia para Comprar:
        </div>
    
        <ProductForm prodList={data} />


        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
