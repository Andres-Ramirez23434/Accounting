function formatAmount() {
    // Obtener el valor del monto del préstamo
    let loanAmountInput = document.getElementById('loanAmount');
    let loanAmountValue = loanAmountInput.value.replace(/,/g, ''); // Eliminar comas actuales
    loanAmountValue = parseFloat(loanAmountValue);
  
    // Formatear el valor con comas
    let formattedAmount = loanAmountValue.toLocaleString('en-US');
  
    // Mostrar el valor formateado en el input
    loanAmountInput.value = formattedAmount;
  }
  
  function calculateLoan() {
    // Obtener los valores del formulario
    const loanAmountInput = document.getElementById('loanAmount');
    let loanAmountValue = loanAmountInput.value.replace(/,/g, ''); // Eliminar comas actuales
    loanAmountValue = parseFloat(loanAmountValue);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);
  
    // Calcular la cuota mensual
    const monthlyPayment = (loanAmountValue * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
  
    // Calcular el pago total
    const totalPayment = monthlyPayment * loanTerm;
  
    // Mostrar los resultados en COP
    const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 2,
    });
  
    document.getElementById('monthlyPayment').textContent = `Cuota mensual: ${formatter.format(monthlyPayment)}`;
    document.getElementById('totalPayment').textContent = `Pago total: ${formatter.format(totalPayment)}`;
  }
  
