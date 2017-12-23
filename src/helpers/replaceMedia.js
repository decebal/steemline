export default function replaceMedia(body) {
    return body
        .replace(/((https?:)?\/\/?[^'"<>]+?\.(jpg|jpeg|gif|png))(?!")/ig, '<img src="$1" style="width: 100%;" />')
        .replace(/(^http:\/\/(?:www\.)?youtube.com\/watch\?(?=[^?]*v=\w+)(?:[^\s?]+)?$)/ig, '$1 <iframe width="150" height="150" src="http://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>')
        ;
}
