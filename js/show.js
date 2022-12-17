<script type="text/javascript">
                        function showmore(_id) {
                            if ($('#show_more_' + _id).attr("opened") == "0") 
                            {
                                $('#show_more_' + _id).html("Скрыть");
                                $('.tr_hidden_' + _id).show();
                                $('#show_more_' + _id).attr("opened", "1");
                            }
                            else {
                                $('#show_more_' + _id).html("Показать ещё предложения");
                                $('.tr_hidden_' + _id).hide();
                                $('#show_more_' + _id).attr("opened", "0");
                            }
                        }
                    </script>




// <a id="show_more_1" opened="0" onclick="showmore(1)">Показать ещё предложения</a>