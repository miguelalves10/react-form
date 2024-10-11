import './App.css'

function App() {

  return (
    <>
      <main className="form-pessoa">
        <h2>Cadastro de Pessoa</h2>
        <form className='row g-3' >
          <div className="col-md-6">
            <label htmlFor="nomeCompleto" className="form-label">Nome Completo</label>
            <input type="text" className="form-control" id='nomeCompleto' />
          </div>

          <div className="col-md-6">
            <label htmlFor="nomeMae" className="form-label">Nome da Mãe</label>
            <input type="text" className="form-control" id='nomeMae' />
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email </label>
            <input type="text" className="form-control" id='email' />
          </div>

          <div className="col-md-6">
            <label htmlFor="senha" className="form-label">Senha</label>
            <input type="password" className="form-control" id='senha' />
          </div>

          <div className="col-md-4">
            <label htmlFor="cep" className="form-label">CEP</label>
            <input type="password" className="form-control" id='cep' />
          </div>

          <div className="col-md-8">
            <label htmlFor="endereco" className="form-label">Endereço</label>
            <input type="text" className="form-control" id='endereco' />
          </div>

          <div className="col-md-1">
            <label htmlFor="numero" className="form-label">Número</label>
            <input type="text" className="form-control" id='numero' />
          </div>

          <div className="col-md-11">
            <label htmlFor="complemento" className="form-label">Complemento</label>
            <input type="text" className="form-control" id='complemento' />
          </div>

          <div className="col-md-4">
            <label htmlFor="bairro" className="form-label">Bairro</label>
            <input type="text" className="form-control" id='bairro' />
          </div>

          <div className="col-md-4">
            <label htmlFor="estado" className="form-label">Estado</label>
            <select id="estado" class="form-select">
              <option selected>Escolha...</option>
              <option>...</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="cidade" className="form-label">Cidade</label>
            <select id="cidade" class="form-select">
              <option selected>Escolha...</option>
              <option>...</option>
            </select>
          </div>
        </form>
      </main>
    </>
  )
}

export default App
