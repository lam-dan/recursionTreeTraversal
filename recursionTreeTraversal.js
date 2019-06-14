const locations = [
    'New York', 
    [
      'Manhattan',
      [
        'Harlem', 'Upper East Side'
      ]
    ],
    [
      'Brooklyn'
    ]
  ];

  
function includes(item, list) {
    if (isEmpty(list)) {
      return false;
    } else if(isNode(first(list))) {
      return first(list) == item || includes(item, rest(list));
    } else {
      return includes(item, first(list)) || includes(item, rest(list));
    }
  }

function remove(item, list) {
  if (isEmpty(list)) {
    return [];
	} else if (isNode(first(list))) {
    if (first(list) == item) {
      return remove(item, rest(list));
    } else {
      return concat(first(list), remove(item, rest(list)));
    }
  } else {
    return concat(remove(item, first(list)), remove(item, rest(list)));
  }
}