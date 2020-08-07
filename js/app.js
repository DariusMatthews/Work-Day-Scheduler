$(document).ready(() => {

  // display current date on page
  const currentDate = moment().format("dddd, MMMM Do");
  $('.current-date').html(currentDate);

  // for loop for calendar list items
  for (let i = 0; i < workHours.length; i++) {
    // add list item for each work hour
    $(".list-group")
      .append(
        `<li class="list-group-item task-list"> 
          ${workHours[i].time.format('hA')} 
          <input class="ml-4 text-input task${i}" type="text" value="${workHours[i].task}"/> 
          <input class="btn btn-primary btn-input save${i}" type="button" value="save" />
        </li>`
      );

    // change color depending on time of day
    if (moment(workHours[i].time).isAfter(moment(), 'hour')) {
      $('.list-group-item').addClass('future-hour');
    } else if (moment(workHours[i].time).isSame(moment(), 'hour')) {
      $('.list-group-item').addClass('current-hour');
    } else {
      $('.list-group-item').addClass('past-hour');
    }

    // Store task on text change
    $(`.task${i}`).on('change', () => workHours[i].task = $(`.task${i}`).val());

    // Save task to local storage on btn click
    $(`.save${i}`).on('click', function () {
      localStorage.setItem(`${workHours[i].time.format('hA')} task`, workHours[i].task);
      $(this).val('saved!');
    });
  }

  // Reset local storage when new day starts
  const startOfNextDay = moment().add(1, 'd').startOf('day');

  if (moment().isSame(startOfNextDay)) {
    localStorage.clear();
    console.log('Storage Cleard');
  }
});