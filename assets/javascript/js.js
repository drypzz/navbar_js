
// tables

const consts = {
    'geral':{
        'menu': document.querySelector('#mobile-menu'),
        'links': document.querySelector('.navbar-menu'),
    },
};

// click

consts['geral']['menu'].addEventListener('click',
    () => {
        consts['geral']['menu'].classList.toggle('is-active')
        consts['geral']['links'].classList.toggle('active')

        console.log(consts['geral']['menu'].classList)
        console.log(consts['geral']['links'].classList)
    }
);