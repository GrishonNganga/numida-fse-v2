def has_selected_field(info, field_name):
    for field_ast in info.field_asts:
        if field_ast.selection_set:
            for selection in field_ast.selection_set.selections:
                if selection.name.value == field_name:
                    return True
    return False
