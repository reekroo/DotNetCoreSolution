class BaseNewsComponent {
    
    getDate(publishedAt: string) {

        return new Date(publishedAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    }

    getDiscription(discription: string) {

        if (discription.length > 400) {

            return discription.substr(1, discription.indexOf('.') + 1);
        }

        return discription;
    }
}

export { BaseNewsComponent };