// tipos de erros 

    //  erro:
      // const numero;

// [Running] node "c:\projetos dev\alura\formação js para back-end\tipos de dados\error.js"
// c:\projetos dev\alura\formação js para back-end\tipos de dados\error.js:3
// const numero;
//       ^^^^^^

// Oque seria? um erro de sintaxe você esqueceu de declarar algum valor a vareavel

    let errorSintaxe = 'SyntaxError: Missing initializer in const declaration'

    // explicando como foi o erro 

        //     at Object.compileFunction (node:vm:352:18)
        //     at wrapSafe (node:internal/modules/cjs/loader:1033:15)
        //     at Module._compile (node:internal/modules/cjs/loader:1069:27)
        //     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
        //     at Module.load (node:internal/modules/cjs/loader:981:32)
        //     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
        //     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
        //     at node:internal/main/run_main_module:17:47

            // [Done] exited with code=1 in 0.687 seconds