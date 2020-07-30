/* eslint-disable no-unused-vars */
import axios from "axios";

// FETCH ALL DATA AT ONCE
// export const fetchBreedsList = ({ commit }) => {
//     setTimeout(() => {
//         axios.get('https://dog.ceo/api/breeds/list/all')
//             .then(response => {
//
//                     let breedsList = [];
//                     let promises = [];
//                     for (let [key, breed] of Object.entries(response.data.message)) {
//                         let url = '';
//                         if (Object.keys(breed).length === 0) {
//                             url = 'https://dog.ceo/api/breed/' + key + '/images/random'
//                             let breedObj = {'name': key}
//                             promises.push(
//                                 axios.get(url).then(response => {
//                                     breedObj.imagePath = response.data.message
//                                     breedsList.push(breedObj);
//                                 })
//                             )
//                         } else {
//                             for (let [k, val] of Object.entries(breed)) {
//
//                                 url = 'https://dog.ceo/api/breed/' + key + '/' + val + '/images/random'
//                                 let breedObj = {'name': key + ' ' + val}
//                                 promises.push(
//                                     axios.get(url).then(response => {
//                                         breedObj.imagePath = response.data.message
//                                         breedsList.push(breedObj);
//                                     })
//                                 )
//                             }
//                         }
//
//                     }
//                     Promise.all(promises).then(() => {
//                         console.log (breedsList)
//                         // commit('SET_BREEDS', breedsList)
//                         commit('SET_BREEDS', breedsList)
//                     });
//             }, 1000)
//     })
// }
//

export const fetchBreedsList = ({ commit }) => {
    axios.get('https://dog.ceo/api/breeds/list/all')
        .then(response => {
            let breedsList = [];
            for (let [key, breed] of Object.entries(response.data.message)) {
                let url = '';
                if (Object.keys(breed).length === 0) {
                    url = 'https://dog.ceo/api/breed/' + key + '/images/random'
                    let breedObj = {'name': key, 'url': url}

                    breedsList.push(breedObj);

                } else {
                    for (let [k, subBreed] of Object.entries(breed)) {
                        url = 'https://dog.ceo/api/breed/' + key + '/' + subBreed + '/images/random'
                        let breedObj = {'name': key + ' ' + subBreed, 'url': url}
                        breedsList.push(breedObj);
                    }
                }
            }
            commit('SET_BREEDS', breedsList)
        })
};

export const fetchFilteredBreeds = ({ commit, getters }, breeds) => {
    let promises = [];

    for (let [k, breed] of Object.entries(breeds)) {
        promises.push(
            axios.get(breed.url)
                .then(response => {
                    breed.imgPath = response.data.message;
                    return breed
                })
        )
    }
    Promise.all(promises).then((values) => {
        commit('SET_PAGINATED_BREEDS', values)
    });
};

export const fetchMoreBreeds = ({ commit, getters }, breeds) => {
    let promises = [];

    for (let [k, breed] of Object.entries(breeds)) {
        promises.push(
            axios.get(breed.url)
                .then(response => {
                    breed.imgPath = response.data.message;
                    return breed
                })
        )
    }
    Promise.all(promises).then((values) => {
        commit('SET_PAGINATED_BREEDS', [...getters.paginatedBreeds, ...values])
    });
};
