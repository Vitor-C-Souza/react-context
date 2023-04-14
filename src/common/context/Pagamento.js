import React, { createContext, useContext, useState } from "react";

export const pagamentoContext = createContext();
pagamentoContext.displayName = "Pagamento";

export const PagamentoProvider = ({ children }) => {
  const tiposDePagamento = [
    {
      nome: "Boleto",
      juros: 1,
      id: 1,
    },
    {
      nome: "Cartão de Crédito",
      juros: 1.3,
      id: 2,
    },
    {
      nome: "Pix",
      juros: 1,
      id: 3,
    },
    {
      nome: "Crediário",
      juros: 1.5,
      id: 4,
    },
  ];
  const [formaPagamento, setFormaPagamento] = useState(tiposDePagamento[0]);
  return (
    <pagamentoContext.Provider
      value={{ tiposDePagamento, formaPagamento, setFormaPagamento }}
    >
      {children}
    </pagamentoContext.Provider>
  );
};

export const usePagamentoContext = () => {
  const { tiposDePagamento, formaPagamento, setFormaPagamento } =
    useContext(pagamentoContext);

    function mudarFormaPagamento(id) {
      const pagamentoAtual = tiposDePagamento.find(pagamento => pagamento.id === id)

      setFormaPagamento(pagamentoAtual)
    }

  return {
    tiposDePagamento,
    formaPagamento,
    mudarFormaPagamento
  };
};
