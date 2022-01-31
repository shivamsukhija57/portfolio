import notepad from '../images/notepad.png';
import photouploader from '../images/photouploader.PNG';
import spotify from '../images/spotify.PNG';
import todoapp from '../images/todoapp.PNG';
import cricinfo from '../images/cricinfo.png';
import rsa from '../images/rsa.jpeg';
import tsp from '../images/tsp.jpeg';
import vote from '../images/vote.jpeg';




const project = [
    {
        id: 1,
        category: 'React',
        image: todoapp,
        link1: '',
        link2: 'https://github.com/shivamsukhija57/to-do-list',
        title: 'To-Do List',
        text: 'Helps in managing your tasks in everyday life'
    },
    {
        id: 2,
        category: 'Web Scraping',
        image: cricinfo,
        link1: '',
        link2: 'https://github.com/shivamsukhija57/Cricinfo-Web-Scraper',
        title: 'Cric-info Web Scraper',
        text: 'Built a web scraper that scrapes details of Batsman of each team that played in  IPL'
    },
    {
        id: 3,
        category: 'C++',
        image: tsp,
        link1: '',
        link2: 'https://github.com/shivamsukhija57/DESIGN-AND-IMPLEMENTATION-OF-EFFICIENT-ALGORITHM-FOR-DELIVERY-SYSTEM-',
        title: ' Designing efficient delivery system',
        text: ' Designed and Implemented to  find the best path for a delivery system'
    },
    {
        id: 4,
        category: 'Cryptography',
        image: rsa,
        link1: '',
        link2: 'https://github.com/shivamsukhija57/Improved-Rsa-Algorithm',
        title: ' Improved RSA algorithm',
        text: 'Improving approach of RSA algorithm using two public key pairs and using some mathematical logic rather than sending one public key directly, more reliable for brute force attack. '
    },
    {
        id: 5,
        category: 'React',
        image: photouploader,
        link1: '',
        link2: 'https://github.com/shivamsukhija57/photo-uploader',
        title: ' Photo Uploader',
        text: 'Simple web app to store and view photos using Firebase '
    },
    
    {
        id: 6,
        category: 'Javascript',
        image: spotify,
        link1: '',
        link2: 'https://github.com/shivamsukhija57/automatic-playlist-maker',
        title: 'Spotify Playlist Maker',
        text: 'A spotify automatic playlist generator with generates the playists with the name of the songs provided. '
    },
    {
        id: 7,
        category: 'Python',
        image: notepad,
        link1: '',
        link2: 'https://github.com/shivamsukhija57/compress-hub',
        title: 'Compress Hub',
        text: 'Notepad which  automatically highly compresses file using LZW and huffman encoding algorithm   '
    },
    {
        id: 8,
        category: 'C++',
        image: vote,
        link1: '',
        link2: 'https://github.com/shivamsukhija57/Electoral-Voting-System',
        title: 'Electoral Voting System',
        text: 'CLI system to conduct voting made using Red-Black Tree, LinkedList and Bloom-Filter '
    },
    
]
export default project;