describe('Cermati', function(){
    it('Daftar_Akun', function(){
        //Redirect to website cermati tujuan
        cy.visit('https://www.cermati.com/app/gabung')
        cy.contains('Daftar Akun').should('be.visible')
        //Type User Information
        cy.get('input[name=email]').type('korneliussung00@gmail.com')
        cy.get('input[name=mobilePhone]').type('087881717204')
        cy.get('input[name=password]').type('Asdfgh1!')
        cy.get('input[name=confirmPassword]').type('Asdfgh1!')
        cy.get('input[name=firstName]').type('Kornelius')
        cy.get('input[name=lastName]').type('Kornelius')
        cy.get('input[name=cityAndProvince]').type('KABUPATEN TANGERANG')
        cy.contains('KABUPATEN TANGERANG').click()
        //Check checklist box
        cy.get('[type=checkbox]').uncheck({force:true})
        cy.contains('Anda harus menyetujui Syarat dan Ketentuan serta Kebijakan Privasi Cermati.com.').should('be.visible')
        cy.get('[type=checkbox]').check({force:true})
        //Click Register Button
        cy.get('button[data-button-name=register-new]').click()
        cy.contains('Email sudah terdaftar').should('be.visible')
        cy.get('.modal__footer_GFKLE > .btn--link_iMrB4').click()
        //My email and phone number have already been used for register before
       })
})