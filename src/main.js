import { fetchImages } from './js/pixabay-api';
import { createImageMarkup } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'simplelightbox/dist/simple-lightbox.min.css';

let query = '';
let page = 1;
const perPage = 40;

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onSearch);

async function onSearch(e) {
    e.preventDefault();
    query = e.target.elements.searchQuery.value.trim();

    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query!',
        });
        return;
    }

    page = 1;
    gallery.innerHTML = '';
    showLoader();

    try {
        const { hits, totalHits } = await fetchImages(query, page, perPage);

        if (!hits.length) {
            iziToast.warning({
                title: 'No Results',
                message: 'Sorry, there are no images matching your search query.',
            });
            return;
        }

        gallery.innerHTML = createImageMarkup(hits);
        iziToast.success({
            title: 'Success',
            message: `Found ${totalHits} images!`,
        });

        const lightbox = new SimpleLightbox('.gallery a');
        lightbox.refresh();
    } catch (error) {
        iziToast.error({ title: 'Error', message: 'Something went wrong!' });
    } finally {
        hideLoader();
    }
}

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}
