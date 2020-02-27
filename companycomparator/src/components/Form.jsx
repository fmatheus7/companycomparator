import React, { useState, useEffect, useReducer } from 'react';
import Input from './Input'
import Label from './Label'

// import { Container } from './styles';

export default function Form() {

    // const [precoAcao, setPrecoAcao] = useState('1');
    // const [lucroAcao, setLucroAcao] = useState('1');
    // const [dividendoAcao, setDividendoAcao] = useState('1');
    // const [ativoCirculante, setAtivoCirculante] = useState('1');
    // const [passivoCirculante, setPassivoCirculante] = useState('1');
    // const [valorPatrimonial, setValorPatrimonial] = useState('1');

    const [company, setCompany] = useReducer((state, newState) => ({ ...state, ...newState }),
        {
            companyName: '',
            precoAcao: '',
            lucroAcao: '',
            dividendoAcao: '',
            ativoCirculante: '',
            passivoCirculante: '',
            valorPatrimonial: ''
        }
    );
    
    const indicies = () => {
        console.log("PPVA = " + PVPA,`Liquidez corrente = ` + liquidezCorrent, `dividend Yield = ` + dividendYield,`preco lucro= ` + precoLucro)
    }

    const handleChange = evt => {
        const { name, value } = evt.target;

        setCompany({ [name]: value })
    }

    const precoLucro = company.precoAcao / company.lucroAcao;
    const dividendYield = company.dividendoAcao / company.precoAcao;
    const liquidezCorrent = company.ativoCirculante / company.passivoCirculante;
    const PVPA = company.precoAcao / company.valorPatrimonial;



    function handleClick() {
        console.log("PPVA =" + PVPA,`Liquidez corrente =` + liquidezCorrent, `dividend Yield =` + dividendYield,`preco lucro= ` + precoLucro)
    }

    function handleSubmit(e) {
        e.preventDefault();
        indicies();

    }


    return (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
          <Label for="Nome da empresa" />
            <Input type="text" id="companyName" onChange={handleChange} value={company.companyName} name="companyName" />
            <Label for="Preco da Ação" />
            <Input type="number" id="precoAcao" onChange={handleChange} value={company.precoAcao} name="precoAcao" />
            <Label for="Lucro por Ação" />
            <Input type="number" id="lucroAcao" onChange={handleChange} value={company.lucroAcao} name="lucroAcao" />
            <Label for="Dividendo por Ação" />
            <Input type="number" id="dividendoAcao" onChange={handleChange} value={company.dividendoAcao} name="dividendoAcao" />
            <Label for="Ativo Circulante" />
            <Input type="number" id="ativoCirculante" onChange={handleChange} value={company.ativoCirculante} name="ativoCirculante" />
            <Label for="Passivo Circulante" />
            <Input type="number" id="passivoCirculante" onChange={handleChange} value={company.passivoCirculante} name="passivoCirculante" />
            <Label for="Valor Patrimonial" />
            <Input type="number" id="valorPatrimonial" onChange={handleChange} value={company.valorPatrimonial} name="valorPatrimonial" />
            <Input type="submit" />
          </form> 
            

            <h1>Mostrando dados da empresa {company.companyName}</h1>
            <div className="graficos">




            </div>

        </div>
    );
}
